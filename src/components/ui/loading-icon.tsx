"use client";

import { Shield, Camera, MapPin, Gauge, HardDriveDownload, Wifi } from "lucide-react";

export function LoadingIcon({ index, isActive }: { index: number; isActive: boolean }) {
    const icons = [Shield, Camera, MapPin, Gauge, HardDriveDownload, Wifi];
    const Icon = icons[index % icons.length];

    return (
        <div className={`absolute transform transition-all duration-500 ${isActive ? 'scale-125' : 'scale-100'}`}>
            <Icon className={`w-8 h-8 ${isActive ? 'text-orange-400' : 'text-blue-400'}`} />
        </div>
    );
}