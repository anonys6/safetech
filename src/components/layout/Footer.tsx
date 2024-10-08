import styles from "@/styles/Footer.module.css";
import logo from "@/assets/SafeTech-Logo.svg";
import Image from "next/image";
import { Link } from '@/i18n/routing';
import SocialList from "../ui/social-circle";
import { SquareArrowOutUpRight } from "lucide-react";

const footerArray = {
    lmi: [
        {
            title: "Side Boom",
            href: "/side-boom-lmi",
        },
        {
            title: "Forklift",
            href: "/forklift",
        },
        {
            title: "Boom Turck",
            href: "/boom-truck",
        },
        {
            title: "Pay Loader",
            href: "/pay-loader",
        },
        {
            title: "Articulated",
            href: "/articulated",
        },
    ],
    pwas: [
        {
            title: "PWAS with AI",
            href: "/pwas-system-ai-radar",
        },
        {
            title: "Camera",
            href: "camera",
        },
        {
            title: "Monitor",
            href: "/monitor",
        },
        {
            title: "Accessories",
            href: "/accessories",
        }
    ],
    others: [
        {
            title: "Privacy Policy",
            href: "/privacy-policy",
        },
        {
            title: "Cookie Policy",
            href: "/cookie-policy",
        },
        {
            title: "Terms and Conditions",
            href: "/terms-and-conditions",
        },
        {
            title: "Disclaimer",
            href: "/disclaimer",
        },
        {
            title: "Agreement",
            href: "/agreement",
        }
    ]
}

function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.col1}>
                    <Image src={logo} alt="SafeTech" width={174} height={42} />
                    <p>
                        Safe Tech Solutions pioneers safety with cutting-edge solutions, redefining industry standards. Our commitment to excellence and client-centric innovation ensures unparalleled security in workplaces worldwide.
                    </p>
                    <Link href="/privacy-policy">Privacy Policy</Link>

                    <div className={styles.socialIcons}>
                        <SocialList />
                    </div>
                </div>

                <div className={styles.col2}>
                    <h2>Keep in Touch</h2>
                    <div className={styles.wrapperContact}>
                        <h3>Email:</h3>
                        <Link href="mailto:info@safetechco.com">info@safetechco.com</Link>
                    </div>

                    <div className={styles.wrapperContact}>
                        <h3>Phone:</h3>
                        <Link href="tel:+966578490480">+966 578490480</Link>
                    </div>

                    <div className={styles.wrapperContact}>
                        <h3>Address:</h3>
                        <p>
                            Building No. 4185, Prince Nayef Road 6599,<br />
                            Postal code 35514 City Jubail Center,<br />
                            Kingdom of Saudi Arabia
                        </p>
                    </div>
                </div>

                <div className={styles.col3}>
                    <ul className={styles.itemList}><h2>LMI:</h2>
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
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.col4}>
                    <ul className={styles.itemList}><h2>PWAS:</h2>
                        {footerArray.pwas.map((item, index) => (
                            <li key={index} className={styles.listWrapper}>
                                <SquareArrowOutUpRight size={16} />
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className={styles.wrapperCopyright}>
                <p>
                    Copyright © 2024 SafeTech, Powered by SafeTech
                </p>
            </div>
        </footer>
    )
}

export default Footer