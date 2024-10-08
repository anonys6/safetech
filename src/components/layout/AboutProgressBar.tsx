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
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <Image
            src={workerImage}
            alt='worker'
            height={560}
            width={560}
          />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.aboutHeading}>
            <MdOutlineHomeWork size={24} />
            <h3>{t('title')}</h3>
            <h1 style={{ display: 'none' }}>{title}</h1>
          </div>
          <h2>{t('heading')}</h2>
          <p>{t('intro')}</p>

          <Link href='/about-us'>
            <Button>{t('discover_more')}</Button>
          </Link>

          <div className={styles.sliderWrapper}>
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
