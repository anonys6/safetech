import React from 'react'
import styles from "@/styles/AboutProgressBar.module.css"
import workerImage from "@/assets/about.webp";
import Image from 'next/image';
import { MdOutlineHomeWork } from "react-icons/md";
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import Link from 'next/link';

const progressArray: {
  title: string,
  value: number
}[] = [
    {
      title: "Innovation",
      value: 90,
    },
    {
      title: "Customer Focus",
      value: 99,
    },
    {
      title: "Quality Excellence",
      value: 96,
    },
    {
      title: "Reliability",
      value: 90,
    },
    {
      title: "Integrity",
      value: 88,
    }

  ]

function AboutProgressBar() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <Image
            src={workerImage}
            alt='worker'
            // fill
            height={560}
            width={560}
          />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.aboutHeading}>
            <MdOutlineHomeWork size={24} />
            <h3>About</h3>
          </div>
          <h2>Welcome to <span className='text-orange-600'>Safe Tech Solutions</span></h2>
          <p>
            Safe Tech Solutions pioneers safety with advanced PWAS systems, LMI systems, and fleet management. Focused on excellence and client needs, we deliver top-tier security, enhancing safety and efficiency in workplaces worldwide.
          </p>

          <Link href='/about-us'>
            <Button>DISCOVER MORE</Button>
          </Link>

          <div className={styles.sliderWrapper}>
            {progressArray.map((progress, index) => (
              <div key={index} className={styles.progress}>
                <div className={styles.progressTitle}>
                  <p>{progress.title}</p>
                  <span>{progress.value}%</span>
                </div>
                <Progress value={progress.value} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutProgressBar