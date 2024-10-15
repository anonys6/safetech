"use client";

// import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"

// export default function HomeCarousel() {
//     const plugin = React.useRef(
//         Autoplay({
//             delay: 2000,
//             stopOnInteraction: false,
//             stopOnMouseEnter: false,
//             stopOnFocusIn: false,
//             stopOnLastSnap: false,

//         })
//     )

//     return (
//         <Carousel
//             plugins={[plugin.current]}
//             className="w-full max-w-xs"
//             onMouseEnter={plugin.current.stop}
//             onMouseLeave={plugin.current.reset}
//         >
//             <CarouselContent>
//                 {Array.from({ length: 5 }).map((_, index) => (
//                     <CarouselItem key={index}>
//                         <div className="p-1">
//                             <Card>
//                                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                                     <span className="text-4xl font-semibold">{index + 1}</span>
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     </CarouselItem>
//                 ))}
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//         </Carousel>
//     )
// }

import pwasImage from "@/assets/pwas-hero.webp";
import banner2 from "@/assets/hero-banner-2.webp";
import banner3 from "@/assets/hero-banner-3.webp";
import banner4 from "@/assets/hero-banner-4.webp";
import banner5 from "@/assets/hero-banner-5.webp";
import banner6 from "@/assets/hero-banner-6.webp";

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from "@/styles/homeCarousel.module.css"
import Image from 'next/image';
// import { BackgroundLines } from "../ui/background-lines";

export default function HomeCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                <div className={styles.embla__slide}>
                    <Image
                        src={pwasImage}
                        alt='pwas-hero'
                        // fill
                        height={900}
                        className={styles.embla__slide__img}
                    />
                </div>
                <div className={styles.embla__slide}>
                    <Image
                        src={banner2}
                        alt='pwas-hero'
                        // fill
                        height={900}
                        className={styles.embla__slide__img}
                    /></div>
                <div className={styles.embla__slide}>
                    <Image
                        src={banner3}
                        alt='pwas-hero'
                        // fill
                        height={900}
                        className={styles.embla__slide__img}
                    />
                </div>
                <div className={styles.embla__slide}>
                    <Image
                        src={banner4}
                        alt='pwas-hero'
                        // fill
                        height={900}
                        className={styles.embla__slide__img}
                    />
                </div>
                <div className={styles.embla__slide}>
                    <Image
                        src={banner5}
                        alt='pwas-hero'
                        // fill
                        height={900}
                        className={styles.embla__slide__img}
                    />
                </div>
                <div className={styles.embla__slide}>
                    <Image
                        src={banner6}
                        alt='pwas-hero'
                        // fill
                        height={900}
                        className={styles.embla__slide__img}
                    />
                </div>
            </div>
            {/* <BackgroundLines>
                .
            </BackgroundLines> */}
        </div>
    )
}

