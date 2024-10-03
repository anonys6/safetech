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
                        src={pwasImage}
                        alt='pwas-hero'
                        // fill
                        height={900}
                        className={styles.embla__slide__img}
                    /></div>
                <div className={styles.embla__slide}>
                    <Image
                        src={pwasImage}
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

