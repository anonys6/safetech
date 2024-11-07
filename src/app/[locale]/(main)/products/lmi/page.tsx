import React from 'react'
import Image from 'next/image';
import lmiImage from "@/assets/side-boom.webp";
import { FaWrench } from "react-icons/fa";
import styles from "@/styles/Lmi.module.css";
import { Button } from '@/components/ui/button';
import { EmblaOptionsType } from 'embla-carousel'
import "@/styles/embla.css";
import miningImage from "@/assets/mining-operations.webp";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"

import EmblaCarousel from '@/components/layout/LmiCarousel';
import FAQ from '@/components/layout/FAQ';
import EnquiryForm from '@/components/layout/EnquiryForm';

const invoices = [
    {
        invoice: "Operating Voltage",
        paymentStatus: "AC 220V±20% or DC 12~ 24V",
    },
    {
        invoice: "Working Temperature",
        paymentStatus: "Pending",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
    },
]


const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function page() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Image
                    src={lmiImage}
                    alt="LMI"
                />

                <div className={styles.contentContainer}>
                    <h3 className='text-primary text-3xl font-semibold'>Load Moment Indicator for Side Boom Crane LMI</h3>
                    <ul className={styles.descList}>
                        <li>
                            <strong>A Side Boom Load Moment Indicator (LMI) is a crucial safety device used in various industries, including construction, mining, and material handling.</strong> By providing real-time data on load weight, radius, and height, LMIs help operators maintain safe limits and prevent accidents.
                        </li>
                        <li>
                            <strong>The system&apos;s intuitive display and audible alarms</strong> ensure that operators are immediately aware of any potential hazards, allowing them to take corrective action promptly. This proactive approach significantly enhances safety and efficiency.
                        </li>
                        <li>
                            By meeting the ASMEB30.14 safety standard, LMIs demonstrate their adherence to industry best practices. This ensures that operators can rely on the system&apos;s accuracy and reliability, making it a trusted tool for maintaining safe and efficient operations.
                        </li>
                    </ul>

                    <h3 className='text-primary text-3xl font-semibold'>Key Point:</h3>
                    <ul className={styles.keyList}>
                        <li>
                            <FaWrench /> <strong>Easy Installation</strong>
                        </li>
                        <li>
                            <FaWrench /> <strong>Easy Installation</strong>
                        </li>
                        <li>
                            <FaWrench /> <strong>Easy Installation</strong>
                        </li>
                        <li>
                            <FaWrench /> <strong>Easy Installation</strong>
                        </li>
                        <li>
                            <FaWrench /> <strong>Easy Installation</strong>
                        </li>
                        <li>
                            <FaWrench /> <strong>Easy Installation</strong>
                        </li>
                        <li>
                            <FaWrench /> <strong>Easy Installation</strong>
                        </li>
                        <li>
                            <FaWrench /> <strong>Easy Installation</strong>
                        </li>
                        <li>
                            <FaWrench /> <strong>Easy Installation</strong>
                        </li>
                        <li>
                            <FaWrench /> <strong>Easy Installation</strong>
                        </li>
                    </ul>
                    <Button className='self-start'>Get In Touch</Button>

                    <h3 className='text-primary text-3xl font-semibold text-center'>Side Boom LMI Technical Details:</h3>


                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead >Parameters</TableHead>
                                <TableHead>Value</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.invoice}>
                                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <h3 className='text-primary text-4xl font-semibold'>Side Boom LMI Technical Details:</h3>
                    <ul className='grid grid-cols-1 md:grid-cols-2'>
                        <li><strong>Prevent Accidents:</strong> Avoid overloads and tipping.</li>
                        <li><strong>Prevent Accidents:</strong> Avoid overloads and tipping.</li>
                        <li><strong>Prevent Accidents:</strong> Avoid overloads and tipping.</li>
                        <li><strong>Prevent Accidents:</strong> Avoid overloads and tipping.</li>
                        <li><strong>Prevent Accidents:</strong> Avoid overloads and tipping.</li>
                        <li><strong>Prevent Accidents:</strong> Avoid overloads and tipping.</li>
                    </ul>

                    <h3 className='text-primary text-3xl font-semibold'>Main Component List:</h3>

                    <div className="emblaContainer">
                        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                    </div>
                    <h3 className='text-primary text-3xl font-semibold'>Related Products:</h3>

                    <div className="emblaContainer">
                        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                    </div>

                    <h3 className='text-primary text-3xl font-semibold'>Application:</h3>
                    <div className="grid grid-cols-1 2sm:grid-cols-2 md:grid-cols-4 gap-2">
                        <Card className='hover:shadow-lg'>
                            <CardContent className='pt-6 pb-3'>
                                <Image
                                    className="rounded-lg"
                                    src={miningImage}
                                    alt="Mining Operations"
                                />
                            </CardContent>
                            <CardFooter className='justify-center pb-4'>
                                <CardTitle className='text-xl'>Mining Operations</CardTitle>
                            </CardFooter>
                        </Card>
                        <Card className='hover:shadow-lg'>
                            <CardContent className='pt-6 pb-3'>
                                <Image
                                    className="rounded-lg"
                                    src={miningImage}
                                    alt="Mining Operations"
                                />
                            </CardContent>
                            <CardFooter className='justify-center pb-4'>
                                <CardTitle className='text-xl'>Mining Operations</CardTitle>
                            </CardFooter>
                        </Card>
                        <Card className='hover:shadow-lg'>
                            <CardContent className='pt-6 pb-3'>
                                <Image
                                    className="rounded-lg"
                                    src={miningImage}
                                    alt="Mining Operations"
                                />
                            </CardContent>
                            <CardFooter className='justify-center pb-4'>
                                <CardTitle className='text-xl'>Mining Operations</CardTitle>
                            </CardFooter>
                        </Card>
                        <Card className='hover:shadow-lg'>
                            <CardContent className='pt-6 pb-3'>
                                <Image
                                    className="rounded-lg"
                                    src={miningImage}
                                    alt="Mining Operations"
                                />
                            </CardContent>
                            <CardFooter className='justify-center pb-4'>
                                <CardTitle className='text-xl'>Mining Operations</CardTitle>
                            </CardFooter>
                        </Card>
                    </div>

                    <div className={styles.wrapperFaqEnquiry}>
                        <FAQ />
                        <EnquiryForm />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page