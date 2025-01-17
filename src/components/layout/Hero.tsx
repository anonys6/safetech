// "use client";

// import React, { useState } from 'react';
import { Button } from '../ui/button-enhanced';
// import { IoIosArrowForward, IoMdArrowForward } from "react-icons/io";
import { AnimatedShinyTextDemo } from './HeroShinyButton';
import { ArrowRightIcon } from 'lucide-react';

const Hero = () => {
    // const [isHovered, setIsHovered] = useState(false);
    // const [isHovered2, setIsHovered2] = useState(false);

    return (
        <div className="h-[calc(60vh-63px)] flex items-center justify-center font-bold flex-col gap-4 p-5 text-center lg:p-52 lg:h-[calc(100vh-63px)]">
            <AnimatedShinyTextDemo />
            <h1 className='text-[30px] lg:text-[64px] drop-shadow-sm z-10 text-center'>Pioneering Safety with Advanced Solutions</h1>
            <p className='text-xl z-10 font-normal drop-shadow-sm text-gray-500 dark:text-gray-400'>Enhancing Safety and Efficiency in Workplaces Worldwide</p>
            <div className='flex gap-8 '>
                <Button
                    variant="expandIconGooeyLeft" Icon={ArrowRightIcon} iconPlacement="right"
                    className='z-10 font-semibold text-md'
                // onMouseEnter={() => setIsHovered2(true)}
                // onMouseLeave={() => setIsHovered2(false)}
                >
                    Get Started
                    {/* &nbsp; {isHovered2 ? <IoMdArrowForward size={20} /> : <IoIosArrowForward size={20} />} */}
                </Button>
                <Button
                    variant="linkHover2ExpandIcon" Icon={ArrowRightIcon} iconPlacement="right"
                    className='font-semibold text-md z-10 bg-transparent hover:bg-transparent p-0 rounded-none text-primary dark:text-white'
                // onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
                >
                    View Products
                    {/* &nbsp; {isHovered ? <IoMdArrowForward size={20} /> : <IoIosArrowForward size={20} />} */}
                </Button>
            </div>
        </div>
    )
}

export default Hero