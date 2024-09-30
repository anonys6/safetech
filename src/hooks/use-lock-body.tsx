// src/hooks/use-lock-body.ts

import { useEffect } from 'react';

/**
 * Locks the body scroll when the component is mounted.
 * Useful for modals or sidebars to prevent background scrolling.
 */
export function useLockBody() {
    useEffect(() => {
        // Get the original value of body overflow
        const originalOverflow = window.getComputedStyle(document.body).overflow;
        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden';
        // Re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);
}
