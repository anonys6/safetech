"use client";

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/en/login");
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return null; // Or add a loading spinner here
    }

    return children;
};

export default ProtectedRoute;
