"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

interface BreadcrumbItem {
    label: string;
    path: string;
}

export default function BreadcrumbNav() {
    const pathname = usePathname();
    const params = useParams();
    const locale = params.locale as string;

    const generateBreadcrumbs = (): BreadcrumbItem[] => {
        const paths = pathname.split('/').filter(Boolean);
        return paths.map((path, index) => {
            const href = '/' + paths.slice(0, index + 1).join('/');
            // Convert path to readable label (e.g., "products" -> "Products")
            const label = path === locale ? 'Home' :
                path.charAt(0).toUpperCase() + path.slice(1);

            return { label, path: href };
        });
    };

    const breadcrumbs = generateBreadcrumbs();

    return (
        <Breadcrumb className='p-4'>
            <BreadcrumbList>
                {breadcrumbs.map((item, index) => (
                    <div key={item.path} className="flex items-center">
                        <BreadcrumbItem>
                            <Link href={item.path}>
                                {item.label}
                            </Link>
                        </BreadcrumbItem>
                        {index < breadcrumbs.length - 1 && (
                            <BreadcrumbSeparator />
                        )}
                    </div>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}