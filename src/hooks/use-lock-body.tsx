import { useEffect } from 'react';

/**
 * Locks the body scroll when the component is mounted.
 */
export function useLockBody() {
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;

        // Lock scroll
        document.body.style.overflow = 'hidden';

        // Cleanup function
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);
}
