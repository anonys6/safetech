import AboutProgressBar from '@/components/layout/AboutProgressBar'
import ScrollLeft from '@/components/layout/scrollLeft'
import Testimonials from '@/components/layout/Testimonials'
import React from 'react'

function page() {
    return (
        <>
            <AboutProgressBar title={`About`} />
            <ScrollLeft />
            <Testimonials />
        </>
    )
}

export default page