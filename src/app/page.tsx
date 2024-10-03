import AboutProgressBar from "@/components/layout/AboutProgressBar";
import EnquiryForm from "@/components/layout/EnquiryForm";
import FAQ from "@/components/layout/FAQ";
import HomeCarousel from "@/components/layout/home-carousel";
import styles from "@/styles/home.module.css";


export default function Home() {
    return (
        <>
            <HomeCarousel />

            {/* <div className={styles.bg}> */}
            <AboutProgressBar />

            <div className={styles.wrapperFaqEnquiry}>
                <FAQ />
                <EnquiryForm />
            </div>
            {/* </div> */}
        </>
    );
}
