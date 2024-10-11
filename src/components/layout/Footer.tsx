import styles from "@/styles/Footer.module.css";
import logo from "@/assets/SafeTech-Logo.svg";
import Image from "next/image";
import { Link } from '@/i18n/routing';
import SocialList from "../ui/social-circle";
import { SquareArrowOutUpRight } from "lucide-react";
import { useTranslations } from 'next-intl';

const footerArray = {
    lmi: [
        { title: "Side Boom", href: "/side-boom-lmi" },
        { title: "Forklift", href: "/forklift" },
        { title: "Boom Truck", href: "/boom-truck" },
        { title: "Pay Loader", href: "/pay-loader" },
        { title: "Articulated", href: "/articulated" }
    ],
    pwas: [
        { title: "PWAS with AI", href: "/pwas-system-ai-radar" },
        { title: "Camera", href: "/camera" },
        { title: "Monitor", href: "/monitor" },
        { title: "Accessories", href: "/accessories" }
    ],
    others: [
        { title: "privacy_policy", href: "/privacy-policy" },
        { title: "cookie_policy", href: "/cookie-policy" },
        { title: "terms_conditions", href: "/terms-and-conditions" },
        { title: "disclaimer", href: "/disclaimer" },
        { title: "agreement", href: "/agreement" }
    ]
};

function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.col1}>
                    <Image src={logo} alt="SafeTech" width={174} height={42} />
                    <p className="hidden sm:block">{t("description")}</p>
                    <Link href="/privacy-policy">{t("privacy_policy")}</Link>

                    <div className={`hidden sm:flex ${styles.socialIcons}`}>
                        <SocialList />
                    </div>
                </div>

                <div className={styles.col2}>
                    <h2>{t("keep_in_touch")}</h2>
                    <div className={styles.wrapperContact}>
                        <h3>{t("email_label")}</h3>
                        <Link href="mailto:info@safetechco.com">info@safetechco.com</Link>
                    </div>

                    <div className={styles.wrapperContact}>
                        <h3>{t("phone_label")}</h3>
                        <Link href="tel:+966578490480">+966 578490480</Link>
                    </div>

                    <div className={styles.wrapperContact}>
                        <h3>{t("address_label")}</h3>
                        <p>{t("address_details")}</p>
                    </div>
                </div>

                <div className={styles.col3}>
                    <ul className={styles.itemList}><h2>{t("lmi_title")}:</h2>
                        {footerArray.lmi.map((item, index) => (
                            <li key={index} className={styles.listWrapper}>
                                <SquareArrowOutUpRight size={16} />
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>

                    <ul className={styles.itemList}>
                        {footerArray.others.map((item, index) => (
                            <li key={index} className={styles.listWrapper}>
                                <SquareArrowOutUpRight size={16} />
                                <Link href={item.href}>{t(`others.${item.title}`)}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={`flex flex-row justify-between w-full items-end ${styles.col4}`}>
                    <ul className={styles.itemList}><h2>{t("pwas_title")}:</h2>
                        {footerArray.pwas.map((item, index) => (
                            <li key={index} className={styles.listWrapper}>
                                <SquareArrowOutUpRight size={16} />
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className={`sm:hidden flex ${styles.socialIcons}`}>
                        <SocialList />
                    </div>
                </div>
            </div>

            <div className={styles.wrapperCopyright}>
                <p>{t("copyright")}</p>
            </div>
        </footer>
    );
}

export default Footer;
