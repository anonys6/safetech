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
        <footer className="flex pt-16 flex-col bg-[var(--bg-footer)] gap-4 text-white">
            <div className="items-start gap-4 2sm:gap-8 px-4 2sm:px-8 grid grid-cols-2  lg:grid-cols-9">
                <div className="flex flex-col gap-4 col-span-2 2sm:col-span-1 lg:col-span-3">
                    <Image
                        style={{ filter: "brightness(200%) contrast(200%) saturate(0%) blur(0px) hue-rotate(0deg)" }}
                        src={logo}
                        alt="SafeTech"
                        width={174}
                        height={42}
                    />
                    <p>{t("description")}</p>
                    <div className="hidden 2sm:flex">
                        <SocialList />
                    </div>
                </div>

                <div className="flex flex-col gap-1 2sm:gap-4 col-span-2 2sm:col-span-1 lg:col-span-2">
                    <h2 className="text-2xl">{t("keep_in_touch")}</h2>
                    <div>
                        <h3 className="text-xl font-bold">{t("email_label")}</h3>
                        <Link href="mailto:info@safetechco.com">info@safetechco.com</Link>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold">{t("phone_label")}</h3>
                        <Link href="tel:+966578490480">+966 578490480</Link>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold">{t("address_label")}</h3>
                        <p>{t("address_details")}</p>
                    </div>
                </div>

                <div className="col-span-1 lg:col-span-2">
                    <ul className="flex flex-col"><h2>{t("lmi_title")}:</h2>
                        {footerArray.lmi.map((item, index) => (
                            <li key={index} className="flex gap-3 items-center">
                                <SquareArrowOutUpRight size={16} />
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>

                    <ul className="flex flex-col">
                        {footerArray.others.map((item, index) => (
                            <li key={index} className="flex gap-3 items-center">
                                <SquareArrowOutUpRight size={16} />
                                <Link href={item.href}>{t(`others.${item.title}`)}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-row justify-between w-full items-end col-span-1 lg:col-span-2">
                    <ul className="flex flex-col">
                        <h2>{t("pwas_title")}:</h2>
                        {footerArray.pwas.map((item, index) => (
                            <li key={index} className="flex gap-3 items-center">
                                <SquareArrowOutUpRight size={16} />
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="2sm:hidden flex">
                    <SocialList />
                </div>
            </div>

            <div className="border-t border-border flex justify-center py-5">
                <p>{t("copyright")}</p>
            </div>
        </footer>
    );
}

export default Footer;
