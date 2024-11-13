"use client";

import { useEffect, useState } from "react";

export default function MainLoader() {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const rotationInterval = setInterval(() => {
            setRotation((prev) => (prev + 1) % 360);
        }, 20);

        return () => clearInterval(rotationInterval);
    }, []);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="relative w-48 h-48">
                {/* Main rotating ring */}
                <div
                    className="absolute inset-0 rounded-full border-4 border-transparent"
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        borderTopColor: 'hsl(var(--primary))',
                        transition: 'transform 0.05s linear'
                    }}
                />

                {/* Secondary rotating ring */}
                <div
                    className="absolute inset-2 rounded-full border-4 border-transparent opacity-40"
                    style={{
                        transform: `rotate(${-rotation * 1.5}deg)`,
                        borderTopColor: 'hsl(var(--secondary))',
                        transition: 'transform 0.05s linear'
                    }}
                />

                {/* Inner ring */}
                <div
                    className="absolute inset-4 rounded-full border-4 border-transparent opacity-20"
                    style={{
                        transform: `rotate(${rotation * 2}deg)`,
                        borderTopColor: 'hsl(var(--primary))',
                        transition: 'transform 0.05s linear'
                    }}
                />

                {/* Center dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Outer glow effect */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 animate-pulse blur-xl" />
            </div>
        </div>
    );
}