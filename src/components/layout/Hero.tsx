"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "../ui/particles";
import WordRotate from "../ui/word-rotate";
import styles from "@/styles/Hero.module.css";
import HyperText from "../ui/hyper-text";

export default function Hero() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");


    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : theme === "system" ? "#fff" : "#000000");
    }, [theme]);

    return (
        <div className={`relative flex h-[100vh] w-full flex-row items-center justify-center overflow-hidden bg-background md:shadow-xl ${styles.container}`}>

            <span className={`whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center flex text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 ${styles.heroText}`}>
                <HyperText
                    className={`whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 ${styles.heroText}`}
                    text="LMI  "
                />
                for&nbsp;
            </span>



            <WordRotate
                className={`pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 ${styles.heroText}`}
                words={["Side Boom Crane", "Forklift", "Boom Truck", "System for pay loader", "Articulated"]}
            />


            <Particles
                className="absolute inset-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
            />
        </div>
    );
}