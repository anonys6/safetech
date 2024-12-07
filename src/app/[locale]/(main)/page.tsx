import AboutProgressBar from "@/components/layout/AboutProgressBar";
import EnquiryForm from "@/components/layout/EnquiryForm";
import FAQ from "@/components/layout/FAQ";
import Hero from "@/components/layout/Hero";
// import HomeCarousel from "@/components/layout/home-carousel";
// import Testimonials from "@/components/layout/Testimonials";
import heroImage from "@/assets/hero-bg.svg";
import Image from 'next/image';
// import Testimonials from "@/components/layout/Testimonials";
import LogoMarquee from "@/components/layout/LogoMarquee";
import { BentoDemo } from "@/components/layout/ProductBento";
import ProductSupport from "@/components/layout/ProductSupport";
import OurTeam from "@/components/layout/OurTeam";
import ProgressiveCarousel from "@/components/layout/ProgressiveCarousel";
import GalleryModal from "@/components/layout/GalleryModal";


export default function Home() {
    return (
        <main>
            {/* <HomeCarousel /> */}
            <Image
                src={heroImage}
                alt="Hero Image"
                // layout="fill"
                objectFit="cover"
                quality={100}
                className='absolute z-0 w-full'
            />

            <Hero />

            {/* <div className={styles.bg}> */}
            <AboutProgressBar title={`About`} />

            <div className="flex w-full">
                <LogoMarquee />
            </div>

            <div className="py-16 px-5 sm:px-12 md:px-20 lg:px-28 border">
                <BentoDemo />
            </div>


            <ProductSupport />

            <OurTeam />
            {/* <Testimonials /> */}

            <div className="w-full flex justify-center">
                <div className="w-[1200px]">
                    <ProgressiveCarousel />
                </div>
            </div>

            <div className='flex w-full py-16 justify-center'>
                <div className='flex w-[1200px] flex-col gap-4 items-center px-4 lg:px-20 text-center leading-snug'>
                    <h2 className='text-[48px]'>Product Fancy Gallery</h2>
                    <p className='text-gray-500 dark:text-gray-400 font-light text-lg'>From one-to-one interactions to unlimited scalability in a single SDK. No need to set up, babysit, and burn dollars with multiple SDKs.</p>

                    <div className='flex items-center'>
                        <GalleryModal />
                    </div>
                </div>

            </div>


            <div className="flex flex-col gap-16 lg:flex-row justify-center px-5 sm:px-8 md:px-16 py-16 bg-background ">
                <FAQ />
                <EnquiryForm />
            </div>
            {/* </div> */}
        </main>
    );
}