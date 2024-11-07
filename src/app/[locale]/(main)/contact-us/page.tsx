import React from 'react'
import styles from "@/styles/Contact.module.css";
import EnquiryForm from '@/components/layout/EnquiryForm';
import { Box, MapPin, PhoneCall } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.leftSide}>
                    <div className='flex flex-row gap-4'>
                        <Box size={24} />
                        <h3 className='uppercase'>Contact Details</h3>
                    </div>

                    <div className='flex flex-row gap-4'>
                        <MapPin size={32} />
                        <div className="flex flex-col">
                            <h4>Our Location</h4>
                            <p className='text-gray-400'>
                                Building No. 4185, Prince Nayef Road 6599, Postal code 35514 City Jubail Center, Kingdom of Saudi Arabia
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <PhoneCall />
                            <div>
                                <h3>Call Us</h3>
                                <Link href="tel:+966578490480">+966 578490480</Link>
                            </div>
                        </div>
                        <div>
                            <PhoneCall />
                            <div>
                                <h3>Call Us</h3>
                                <Link href="tel:+966578490480">+966 578490480</Link>
                            </div>
                        </div>
                        <div>
                            <PhoneCall />
                            <div>
                                <h3>Call Us</h3>
                                <Link href="tel:+966578490480">+966 578490480</Link>
                            </div>
                        </div>
                        <div>
                            <PhoneCall />
                            <div>
                                <h3>Call Us</h3>
                                <Link href="tel:+966578490480">+966 578490480</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <EnquiryForm />
                </div>
            </div>
        </div>
    )
}

export default Contact