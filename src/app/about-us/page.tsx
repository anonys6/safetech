import AboutProgressBar from '@/components/layout/AboutProgressBar'
import Testimonials from '@/components/layout/Testimonials'
import React from 'react'

function page() {
    return (
        <>
            <AboutProgressBar title={`About`} />
            <Testimonials />
        </>
    )
}

export default page