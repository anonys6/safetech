"use client";

import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


import styles from "@/styles/Testimonials.module.css";
import { MdOutlineHomeWork } from 'react-icons/md';
import Image from 'next/image';

const testimonialsArray: {
    name: string,
    position: string,
    testimonial: string
}[] = [
        {
            name: "John Doe",
            position: "CEO",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, orci eget varius tincidunt, libero libero lacinia odio, nec scelerisque purus elit vel libero."
        },
        {
            name: "Jane Doe",
            position: "CTO",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, orci eget varius tincidunt, libero libero lacinia odio, nec scelerisque purus elit vel libero."
        },
        {
            name: "John Doe",
            position: "CEO",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, orci eget varius tincidunt, libero libero lacinia odio, nec scelerisque purus elit vel libero."
        },
        {
            name: "Jane Doe",
            position: "CTO",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, orci eget varius tincidunt, libero libero lacinia odio, nec scelerisque purus elit vel libero."
        },
    ]

function Testimonials() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.leftSide}>
                    <div className={styles.heading}>
                        <MdOutlineHomeWork size={24} />
                        <h3>Testimonials</h3>
                    </div>
                    <h2>We Have Many Good Client&apos;s Reviews</h2>
                </div>

                <div className={styles.rightSide}>
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 3000,
                                stopOnInteraction: false,
                            }),
                        ]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            {/* <CarouselItem></CarouselItem> */}
                            {testimonialsArray.map((item, index) => (
                                <CarouselItem key={index} className={styles.itemBox}>
                                    <TestimonialCard name={item.name} position={item.position} testimonial={item.testimonial} />
                                    {/* <TestimonialCard name={item.name} position={item.position} testimonial={item.testimonial} /> */}
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;

const TestimonialCard = ({ name, position, testimonial }: { name: string, position: string, testimonial: string }) => {
    return (
        <div className={styles.wrapperTestimonial}>
            <div className={styles.top}>
                <Image
                    src="https://picsum.photos/200/200"
                    alt="profile"
                    width={100}
                    height={100}
                />
                <div className={styles.nameBox}>
                    <h3>{name}</h3>
                    <p>{position}</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>{testimonial}</p>
            </div>
        </div>
    );
};

// import styled from "styled-components";

// const TestimonialCard = ({ name, position, testimonial }: { name: string, position: string, testimonial: string }) => {
//     return (
//         <StyledWrapper>
//             <div className="card">
//                 <div className={styles.testimonialCard}>
//                     <p>{testimonial}</p>
//                     <div className={styles.testimonialCard__footer}>
//                         <h3>{name}</h3>
//                         <p>{position}</p>
//                     </div>
//                 </div>

//                 <div className="bg" />
//                 <div className="blob" />
//             </div>
//         </StyledWrapper>
//     );
// };

// const StyledWrapper = styled.div`
//   .card {
//   position: relative;
//   width: 100%;
//   height: 250px;
//   border-radius: 14px;
//   z-index: 1111;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// //   box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
//   ;
// }

// .bg {
//   position: absolute;
//   top: 5px;
//   left: 5px;
//   width: calc(100% - 10px);
//   height: 240px;
//   z-index: 2;
//   background: rgba(255, 255, 255, .95);
//   backdrop-filter: blur(24px);
//   border-radius: 10px;
//   overflow: hidden;
//   outline: 2px solid white;
// }

// .blob {
//   position: absolute;
//   z-index: 1;
//   top: 50%;
//   left: 50%;
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   background-color: #ff0000;
//   opacity: 1;
//   filter: blur(12px);
//   animation: blob-bounce 5s infinite ease;
// }

// @keyframes blob-bounce {
//   0% {
//     transform: translate(-100%, -100%) translate3d(0, 0, 0);
//   }

//   25% {
//     transform: translate(-100%, -100%) translate3d(100%, 0, 0);
//   }

//   50% {
//     transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
//   }

//   75% {
//     transform: translate(-100%, -100%) translate3d(0, 100%, 0);
//   }

//   100% {
//     transform: translate(-100%, -100%) translate3d(0, 0, 0);
//   }
// }

// `;