"use client";

import MainLoader from '@/components/layout/MainLoader';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push("/en/login");
            console.log("from protected route");
        }
    }, [isAuthenticated, loading, router]);

    if (loading) {
        // You can return a loading spinner or null
        return <MainLoader />;
    }

    return children;
};

export default ProtectedRoute;
