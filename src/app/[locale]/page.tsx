import AboutProgressBar from "@/components/layout/AboutProgressBar";
import EnquiryForm from "@/components/layout/EnquiryForm";
import FAQ from "@/components/layout/FAQ";
import HomeCarousel from "@/components/layout/home-carousel";
// import Testimonials from "@/components/layout/Testimonials";
import styles from "@/styles/home.module.css";


export default function Home() {
    return (
        <main className="sm:pb-[457px] pb-[872px]">
            <HomeCarousel />

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