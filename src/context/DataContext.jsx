import React, { createContext, useContext, useMemo, useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getApiBaseUrl, withApiBase } from '../utils/api';

const DataContext = createContext();

const INITIAL_DATA = {
    companyInfo: {
        name: '',
        phone: '',
        phoneHref: '#',
        email: '',
        emailHref: '#',
        address: '',
        logo: '',
        tagline: '',
        socialLinks: {},
    },
    navigation: [],
    routes: { home: '/' },
    pagePaths: [],
    heroSlides: [],
    welcomeContent: { title: '', body: [], ctaLabel: '', ctaHref: '/' },
    reasons: [],
    services: [],
    stats: [],
    testimonials: [],
    clientLogos: [],
    pageContent: {},
    pageImages: {},
    specialPages: {},
};

const normalizePath = (path = '/') => {
    if (!path) return '/';
    const cleanPath = path.split('?')[0].split('#')[0];

    if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
        return cleanPath.slice(0, -1);
    }

    return cleanPath || '/';
};

const processPaths = (value) => {
    if (typeof value === 'string' && value.startsWith('/assets/')) {
        return withApiBase(value);
    }

    if (Array.isArray(value)) {
        return value.map((entry) => processPaths(entry));
    }

    if (typeof value === 'object' && value !== null) {
        return Object.fromEntries(
            Object.entries(value).map(([key, entry]) => [key, processPaths(entry)]),
        );
    }

    return value;
};

const fetchJson = async (url, signal) => {
    const response = await fetch(url, { signal });
    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(payload.error || `Request failed with status ${response.status}`);
    }

    return payload;
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

export const DataProvider = ({ children }) => {
    const location = useLocation();
    const [data, setData] = useState(INITIAL_DATA);
    const [bootstrapLoading, setBootstrapLoading] = useState(true);
    const [routeLoading, setRouteLoading] = useState(false);
    const [error, setError] = useState(null);
    const loadedRef = useRef({ home: false, pages: new Set() });
    const normalizedPath = useMemo(() => normalizePath(location.pathname), [location.pathname]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchBootstrap = async () => {
            try {
                setError(null);
                const API_URL = getApiBaseUrl();

                const payload = await fetchJson(`${API_URL}/api/content/bootstrap`, controller.signal);
                const processedPayload = processPaths(payload);

                setData((prev) => ({ ...prev, ...processedPayload }));
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                setBootstrapLoading(false);
            }
        };

        fetchBootstrap();

        return () => controller.abort();
    }, []);

    useEffect(() => {
        if (bootstrapLoading) {
            return;
        }

        const knownPathSet = new Set((data.pagePaths || []).map((path) => normalizePath(path)));
        const homePath = normalizePath(data.routes?.home || '/');
        const shouldLoadHome = normalizedPath === homePath;
        const shouldLoadPage = knownPathSet.has(normalizedPath);

        if (!shouldLoadHome && !shouldLoadPage) {
            setRouteLoading(false);
            return;
        }

        if (shouldLoadHome && loadedRef.current.home) {
            setRouteLoading(false);
            return;
        }

        if (shouldLoadPage && loadedRef.current.pages.has(normalizedPath)) {
            setRouteLoading(false);
            return;
        }

        const controller = new AbortController();

        const fetchRouteData = async () => {
            try {
                setError(null);
                setRouteLoading(true);
                const API_URL = getApiBaseUrl();

                if (shouldLoadHome) {
                    const payload = await fetchJson(`${API_URL}/api/content/home`, controller.signal);
                    const processedPayload = processPaths(payload);

                    setData((prev) => ({ ...prev, ...processedPayload }));
                    loadedRef.current.home = true;
                    return;
                }

                const payload = await fetchJson(
                    `${API_URL}/api/content/page?path=${encodeURIComponent(normalizedPath)}`,
                    controller.signal,
                );
                const processedPayload = processPaths(payload);

                setData((prev) => {
                    const nextData = {
                        ...prev,
                        pageContent: { ...prev.pageContent },
                        pageImages: { ...prev.pageImages },
                        specialPages: { ...prev.specialPages },
                    };

                    if (processedPayload.pageContent) {
                        nextData.pageContent[normalizedPath] = processedPayload.pageContent;
                    }

                    if (processedPayload.pageImages) {
                        nextData.pageImages[normalizedPath] = processedPayload.pageImages;
                    }

                    if (processedPayload.specialPage) {
                        nextData.specialPages[normalizedPath] = processedPayload.specialPage;
                    }

                    return nextData;
                });

                loadedRef.current.pages.add(normalizedPath);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                setRouteLoading(false);
            }
        };

        fetchRouteData();

        return () => controller.abort();
    }, [bootstrapLoading, data.pagePaths, data.routes, normalizedPath]);

    const value = {
        data,
        loading: bootstrapLoading || routeLoading,
        error
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
