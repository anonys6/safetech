/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/[locale]/(dashboard)/layout.tsx

import { Providers } from "../../providers"; // Adjust the path if needed
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "./globals.css";
import localFont from "next/font/local";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar"; // Import SidebarProvider

const geistSans = localFont({
    src: "../../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default async function DashboardLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages({ locale });

    return (
        <html lang={locale}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Providers>
                    <NextIntlClientProvider messages={messages}>
                        {/* <SidebarProvider>
                            <AppSidebar /> */}
                        {children}
                        {/* </SidebarProvider> */}
                    </NextIntlClientProvider>
                </Providers>
            </body>
        </html>
    );
}
