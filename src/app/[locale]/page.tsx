import AboutProgressBar from "@/components/layout/AboutProgressBar";
import EnquiryForm from "@/components/layout/EnquiryForm";
import FAQ from "@/components/layout/FAQ";
import Hero from "@/components/layout/Hero";
// import HomeCarousel from "@/components/layout/home-carousel";
// import Testimonials from "@/components/layout/Testimonials";
import styles from "@/styles/home.module.css";


export default function Home() {
    return (
        <main>
            {/* <HomeCarousel /> */}
            <Hero />

            {/* <div className={styles.bg}> */}
            <AboutProgressBar title={`About`} />

            {/* <Testimonials /> */}

            <div className={styles.wrapperFaqEnquiry}>
                <FAQ />
                <EnquiryForm />
            </div>
            {/* </div> */}
        </main>
    );
}