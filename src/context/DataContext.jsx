import React, { createContext, useContext, useState, useEffect } from 'react';
import { getApiBaseUrl, withApiBase } from '../utils/api';

const DataContext = createContext();

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_URL = getApiBaseUrl();
                const response = await fetch(`${API_URL}/api/content`);
                if (!response.ok) {
                    throw new Error('Failed to fetch content');
                }
                const jsonData = await response.json();
                
                // Prefix local asset paths with API URL if they aren't absolute
                const processPaths = (obj) => {
                    if (typeof obj !== 'object' || obj === null) return obj;
                    
                    for (let key in obj) {
                        if (typeof obj[key] === 'string' && obj[key].startsWith('/assets/')) {
                            obj[key] = withApiBase(obj[key]);
                        } else if (typeof obj[key] === 'object') {
                            processPaths(obj[key]);
                        }
                    }
                    return obj;
                };

                setData(processPaths(jsonData));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const value = {
        data,
        loading,
        error
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
