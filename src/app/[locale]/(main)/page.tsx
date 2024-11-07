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

            {/* <Testimonials /> */}

            <div className="flex flex-col gap-16 lg:flex-row justify-center px-5 sm:px-8 md:px-16 py-16 bg-background ">
                <FAQ />
                <EnquiryForm />
            </div>
            {/* </div> */}
        </main>
    );
}