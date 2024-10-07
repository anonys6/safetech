"use client";

import * as React from "react"
import styles from "@/styles/GetQuote.module.css";

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import EnquiryForm from "./EnquiryForm";

export default function GetQuote() {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <Drawer direction={window.innerWidth <= 768 ? "bottom" : "left"}>
            <DrawerTrigger asChild>
                <Button variant="outline" className={styles.btnQuote}>GET QUOTE</Button>
            </DrawerTrigger>

            <DrawerContent className={styles.containerContent}>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Request a Quote</DrawerTitle>
                        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                    </DrawerHeader>

                    <EnquiryForm />

                    <DrawerFooter>
                        {/* <Button>Submit</Button> */}
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}