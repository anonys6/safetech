import { DefaultNavbarItem } from "../components/layout/types";

export const navbarConfig: DefaultNavbarItem[] = [
    {
        title: "Home",
        href: "/",
        children: [],
    },
    {
        title: "About Us",
        href: "/about-us",
        children: [],
    },
    {
        title: "Products",
        href: "/products",
        children: [
            {
                title: "Load Moment Indicator",
                href: "products/load-moment-indicator",
                children: [
                    {
                        title: "Load Moment Indicator for Side Boom Crane",
                        href: "products/load-moment-indicator/side-boom-crane",
                        children: [],
                    },
                    {
                        title: "Load Moment Indicator for Forklift",
                        href: "products/load-moment-indicator/forklift",
                        children: [],
                    },
                    {
                        title: "Load Moment Indicator for Boom Truck",
                        href: "products/load-moment-indicator/boom-truck",
                        children: [],
                    },
                    {
                        title: "Load Moment Indicator systems for PayLoader",
                        href: "products/load-moment-indicator/payloader",
                        children: [],
                    },
                    {
                        title: "Load Moment Indicator for Articulated",
                        href: "products/load-moment-indicator/articulated",
                        children: [],
                    },
                    {
                        title: "LMI for Crawler Cranes: A Safety Essential",
                        href: "products/load-moment-indicator/crawler-cranes",
                        children: [],
                    },
                ]
            },
            {
                title: "PWAS System",
                href: "products/pwas-system",
                children: [
                    {
                        title: "Premier AI Pwas Systems | 360°",
                        href: "products/pwas-system/premier-ai-pwas-systems",
                        children: [],
                    },
                    {
                        title: "Proximity Warning and Alert Systems",
                        href: "products/pwas-system/proximity-warning-and-alert-systems",
                        children: [],
                    },
                    {
                        title: "Smart Multi-Sensor PWAS | Superior 360° Safety",
                        href: "products/pwas-system/smart-multi-sensor-pwas",
                        children: [],
                    }
                ]
            },
            {
                title: "Accessories",
                href: "products/accessories",
                children: [
                    {
                        title: "PWAS Monitor Screen 10 Inch Touch Display",
                        href: "products/accessories/pwas-monitor-screen",
                        children: [],
                    },
                    {
                        title: "High Definition AI Camera Systems",
                        href: "products/accessories/high-definition-ai-camera-systems",
                        children: [],
                    }
                ]
            }
        ]
    },
    {
        title: "Contact Us",
        href: "/contact-us",
        children: [],
    }
];
