"use client";

import * as React from "react";
import styles from "@/styles/GetQuote.module.css";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import EnquiryForm from "./EnquiryForm";
import { useTranslations } from 'next-intl';

export default function GetQuote() {
    const [isClient, setIsClient] = React.useState(false);
    const t = useTranslations("GetQuote");

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <Drawer direction={window.innerWidth <= 768 ? "bottom" : "left"}>
            <DrawerTrigger asChild>
                <Button variant="outline" className={styles.btnQuote}>{t("button_text")}</Button>
            </DrawerTrigger>

            <DrawerContent className={styles.containerContent}>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>{t("title")}</DrawerTitle>
                        <DrawerDescription>{t("description")}</DrawerDescription>
                    </DrawerHeader>

                    <EnquiryForm />

                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline">{t("cancel_button")}</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
