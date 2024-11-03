"use client";

import Image, { StaticImageData } from 'next/image'
import { ReactNode, useState } from 'react'

interface ProductSupportCardProps {
    icon: ReactNode;
    title: string;
    desc: string;
    image: string | StaticImageData;
}


/*
background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,135,0,0.1389006286108193) 100%);
*/

const ProductSupportCard = ({ icon, title, desc, image }: ProductSupportCardProps) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            style={{
                transition: "all .3s cubic-bezier(.165,.84,.44,1)",
                boxShadow: isHovered ? "0 0 24px #0000001a" : undefined,
                background: isHovered ? `linear-gradient(transparent 42%, rgba(246,107,21,0.17) 100%)` : undefined,
                backgroundSize: "cover",
            }}
            className='border-2 rounded-2xl pt-8 pl-8 sm:pt-6 sm:pl-6 lg:pt-12 lg:pl-12  text-left flex flex-col items-start gap-2  cursor-pointer dark:bg-none'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`p-2 border rounded-lg  ${isHovered && "text-primary border-primary"}`}
                style={{ transition: "all .3s cubic-bezier(.165,.84,.44,1)" }}
            >
                {icon}
            </div>
            <div className='pr-4 flex flex-col gap-2'>
                <h3
                    className={`text-[28px] font-bold  ${isHovered && "text-primary"}`}
                    style={{ transition: "all .3s cubic-bezier(.165,.84,.44,1)" }}
                >
                    {title}
                </h3>
                <p className='text-xl text-gray-400 font-extralight'>{desc}</p>
            </div>
            <Image
                src={image}
                alt={title}
                width={482}
                height={252}
                className='rounded-2xl'
            />
        </div>
    )
}

export default ProductSupportCard