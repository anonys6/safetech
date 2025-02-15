import * as React from "react";
import { Link } from '@/i18n/routing';

import type { DefaultNavbarItem } from "./types";
import { navbarConfig } from "../../config/navbarConfig";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

export function MobileNav() {
    // Removed useLockBody();

    return (
        <div className="relative grid gap-6 rounded-md bg-popover p-4 text-popover-foreground">
            <nav className="grid grid-flow-row auto-rows-max text-sm">
                {navbarConfig.map((item) => (
                    <NavMenu key={item.href} item={item} />
                ))}
            </nav>
        </div>
    );
}

const NavMenu = ({ item }: { item: DefaultNavbarItem }) => {
    return (
        <div className="translate-x-4">
            <SheetClose asChild>
                <Link
                    href={item.href}
                    className={cn(
                        "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                        item.disabled && "cursor-not-allowed opacity-60"
                    )}
                >
                    <p>{item.title}</p>
                </Link>
            </SheetClose>
            {item.children && item.children.length > 0 && (
                <div className="ml-4">
                    {item.children.map((childItem) => (
                        <NavMenu key={childItem.href} item={childItem} />
                    ))}
                </div>
            )}
        </div>
    );
};
