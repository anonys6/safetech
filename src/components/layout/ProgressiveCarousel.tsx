'use client';
import Image from 'next/image';
import {
    SliderBtnGroup,
    ProgressSlider,
    SliderBtn,
    SliderContent,
    SliderWrapper,
} from '@/components/ui/progress-slider';

const items = [
    {
        img: "https://picsum.photos/1900/1080",
        title: 'Bridge',
        desc: 'A breathtaking view of a city illuminated by countless lights, showcasing the vibrant and bustling nightlife.',
        sliderName: 'bridge',
    },
    {
        img: "https://picsum.photos/1900/1081",
        title: 'Mountains View',
        desc: 'A serene lake reflecting the surrounding mountains and trees, creating a mirror-like surface.',
        sliderName: 'mountains',
    },
    {
        img: "https://picsum.photos/1900/1082",
        title: 'Autumn',
        desc: 'A picturesque path winding through a dense forest adorned with vibrant autumn foliage.',
        sliderName: 'autumn',
    },
    {
        img: "https://picsum.photos/1900/1083",
        title: 'Foggy',
        sliderName: 'foggy',
        desc: 'A stunning foggy view over the foresh, with the sun casting a golden glow across the forest. ',
    },
];
export default function ProgressiveCarousel() {
    return (
        <div className='py-32'>
            <ProgressSlider vertical={false} activeSlider='bridge'>
                <SliderContent>
                    {items.map((item, index) => (
                        <SliderWrapper key={index} value={item?.sliderName}>
                            <Image
                                className='rounded-xl 2xl:h-[500px] h-[350px] object-cover'
                                src={item.img}
                                // src="https://picsum.photos/1900/1080"
                                // src={`${item.img.toString()} + ${index.toString()}`}
                                width={1900}
                                height={1080}
                                alt={item.desc}
                            />
                        </SliderWrapper>
                    ))}
                </SliderContent>

                <SliderBtnGroup className='absolute bottom-0 h-fit dark:text-white text-black dark:bg-black/40 bg-white/40  backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4  rounded-md'>
                    {items.map((item, index) => (
                        <SliderBtn
                            key={index}
                            value={item?.sliderName}
                            className='text-left  p-3 border-r'
                            progressBarClass='dark:bg-black bg-white h-full'
                        >
                            <h2 className='relative px-4 rounded-full w-fit dark:bg-white dark:text-black text-white bg-gray-900 mb-2'>
                                {item.title}
                            </h2>
                            <p className='text-sm font-medium  line-clamp-2'>{item.desc}</p>
                        </SliderBtn>
                    ))}
                </SliderBtnGroup>
            </ProgressSlider>
        </div>
    );
}
