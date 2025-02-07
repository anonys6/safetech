import { useState } from 'react';
import Image from 'next/image';
import {
    ArrowBigDown,
    ArrowRight,
    ChevronRight,
    Heart,
    MoveUpRight,
} from 'lucide-react';

const OurTeam = () => {
    return (
        <div className='flex w-full py-32 justify-center'>
            <div className='flex w-[1200px] flex-col gap items-center px-4 lg:px-4 text-center leading-snug'>
                    <h2 className='text-[48px]'>Experience the simplicity of building live experiences</h2>
                    <p className='text-gray-500 dark:text-gray-400 font-light text-lg'>From one-to-one interactions to unlimited scalability in a single SDK. No need to set up, babysit, and burn dollars with multiple SDKs.</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8'>
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                </div>
            </div>

        </div>
    )
}

export default OurTeam

function TeamCard() {
    return (
        <>
            <div className='xl:w-[350px] relative mt-4 h-[430px] group mx-auto dark:bg-black  bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col'>
                <div className='w-full rounded-t-md h-[350px] group-hover:h-[410px] overflow-hidden transition-all duration-300'>
                    <Image
                        src={'https://picsum.photos/600/600'}
                        alt='shoes'
                        width={600}
                        height={600}
                        className='h-full w-full  scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300'
                    />
                </div>
                <article className='relative overflow-hidden  flex-grow'>
                    <div className='info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300'>
                        <p className='md:text-2xl font-semibold'>Md Saqib Alam</p>
                        <p className='sm:text-base text-sm'>CEO &amp; Design Engineer</p>
                    </div>
                    <button className='absolute h-10 left-0 opacity-0 group-hover:opacity-100 cursor-pointer group-hover:bottom-3  text-3xl font-medium transition-all duration-300 w-full'>
                        CEO &amp; Design Engineer
                    </button>
                </article>
            </div>
        </>
    );
}
