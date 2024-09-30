/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,

} from "@/components/ui/navigation-menu"




import styles from "@/styles/navbar.module.css";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";
import { Button } from "../ui/button";
import { ProductsDropdown } from "./ProductDropdown";
import ListItem from "../ui/list-item";

const products: { title: string; href: string; list?: Array<string> }[] = [
    {
        title: "Load Moment Indicator",
        href: "/products/lmi",
        list: ["Side Boom", "Fork Lift"]
    },
    {
        title: "LMI",
        href: "/products/lmi",
        list: ["Side Boom", "Fork Lift"]
    },
    {
        title: "LMI",
        href: "/products/lmi",
    },
    {
        title: "LMI",
        href: "/products/lmi",
    },
];

function Navbar() {
    return (
        <nav className={styles.container}>

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about-us" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About Us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>


                    <NavigationMenuItem>
                        <NavigationMenuTrigger>LMI</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul>
                                {products.map((product, index) => (
                                    <ListItem
                                        key={index}
                                        title={product.title}
                                        href={product.href}
                                    >
                                        {product.list?.map((item, index) => (
                                            <p key={index}>{item}</p>
                                        ))}
                                    </ListItem>
                                ))
                                }
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact Us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>


            <ModeToggle />


        </nav>
    )
}

export default Navbar





{/* <NavigationMenuItem>
<NavigationMenuTrigger>Products</NavigationMenuTrigger>
<NavigationMenuContent>
    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
        {products.map((product) => (
            <ListItem
                key={product.title}
                title={product.title}
                href={product.href}
            >
                {product.list?.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </ListItem>
        ))}
    </ul>
</NavigationMenuContent>
</NavigationMenuItem> */}