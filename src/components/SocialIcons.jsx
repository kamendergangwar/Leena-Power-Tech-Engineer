const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': 'true',
};

export function LinkedInIcon({ size = 24, className = '' }) {
  return (
    <svg {...iconProps} width={size} height={size} className={className}>
      <path d="M4.98 3.5a2.49 2.49 0 1 0 0 4.98 2.49 2.49 0 0 0 0-4.98ZM3 9h3.96v12H3V9Zm7.21 0H14v1.64h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.11V21h-3.96v-5.59c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V21h-3.96V9Z" />
    </svg>
  );
}

export function TwitterIcon({ size = 24, className = '' }) {
  return (
    <svg {...iconProps} width={size} height={size} className={className}>
      <path d="M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.78-6.26L6.64 22H3.53l7.24-8.27L1 2h6.26l4.32 5.71L18.9 2Zm-1.07 18h1.69L6.34 3.9H4.53L17.83 20Z" />
    </svg>
  );
}

export function FacebookIcon({ size = 24, className = '' }) {
  return (
    <svg {...iconProps} width={size} height={size} className={className}>
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.08c0-.87.25-1.46 1.49-1.46H16.7V4.94c-.31-.04-1.37-.13-2.6-.13-2.57 0-4.33 1.57-4.33 4.46V11H7v3h2.77v8h3.73Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 24, className = '' }) {
  return (
    <svg {...iconProps} width={size} height={size} className={className}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.97 1.35a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16ZM12 6.86A5.14 5.14 0 1 1 6.86 12 5.14 5.14 0 0 1 12 6.86Zm0 1.8A3.34 3.34 0 1 0 15.34 12 3.34 3.34 0 0 0 12 8.66Z" />
    </svg>
  );
}
