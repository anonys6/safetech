import React from 'react';
import styles from "@/styles/AboutProgressBar.module.css";
import workerImage from "@/assets/about.webp";
import Image from 'next/image';
import { MdOutlineHomeWork } from "react-icons/md";
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const progressArray = [
    { key: "progress_innovation", value: 90 },
    { key: "progress_customer_focus", value: 99 },
    { key: "progress_quality_excellence", value: 96 },
    { key: "progress_reliability", value: 90 },
    { key: "progress_integrity", value: 88 }
];

function AboutProgressBar({ title }: { title: string }) {
    const t = useTranslations('About');
    
    return (
        <div className={`${styles.container} z-10`}>
            <div className="flex items-center px-5 md:px-12 xl:px-32 flex-col lg:flex-row">
                <div className={styles.imgWrapper}>
                    <Image
                        src={workerImage}
                        alt='worker'
                        height={560}
                        width={560}
                    />
                </div>

                <div className="flex-1 flex flex-col gap-5 lg:pl-4">
                    <div className={styles.aboutHeading}>
                        <MdOutlineHomeWork size={24} />
                        <h3>{t('title')}</h3>
                        <h1 style={{ display: 'none' }}>{title}</h1>
                    </div>
                    <h2 className='relative'>{t('heading')}</h2>
                    <p className='relative'>{t('intro')}</p>

                    <Link href='/about-us'>
                        <Button className='z-10 relative'>{t('discover_more')}</Button>
                    </Link>

                    <div className="flex flex-col gap-6 2sm:gap-8 border rounded-xl p-6 2sm:p-10">
                        {progressArray.map((progress, index) => (
                            <div key={index} className={styles.progress}>
                                <div className={styles.progressTitle}>
                                    <p>{t(progress.key)}</p>
                                    <span>{progress.value}%</span>
                                </div>
                                <Progress value={progress.value} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutProgressBar;
