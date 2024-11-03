import AboutProgressBar from "@/components/layout/AboutProgressBar";
import EnquiryForm from "@/components/layout/EnquiryForm";
import FAQ from "@/components/layout/FAQ";
import Hero from "@/components/layout/Hero";
// import HomeCarousel from "@/components/layout/home-carousel";
// import Testimonials from "@/components/layout/Testimonials";
import styles from "@/styles/home.module.css";
import heroImage from "@/assets/hero-bg.svg";
import Image from 'next/image';
import Testimonials from "@/components/layout/Testimonials";
import LogoMarquee from "@/components/layout/LogoMarquee";
import { BentoDemo } from "@/components/layout/ProductBento";


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

            <div className="p-8 lg:py-20 lg:px-40">
                <BentoDemo />
            </div>

            <Testimonials />

            <div className={styles.wrapperFaqEnquiry}>
                <FAQ />
                <EnquiryForm />
            </div>
            {/* </div> */}
        </main>
    );
}