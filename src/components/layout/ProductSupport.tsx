import React from 'react'
import ProductSupportCard from './ProductSupportCard'
import { MdOutlineSupportAgent } from 'react-icons/md'
import productSupportImage from "@/assets/product-support.webp";

const productSupports = [
    {
        icon: <MdOutlineSupportAgent size={32} />,
        title: '24/7 Support',
        desc: 'Our team is here to help you with any questions or issues you may have. We are available 24/7 to assist you.',
        image: productSupportImage
    },
    {
        icon: <MdOutlineSupportAgent size={32} />,
        title: 'Dedicated Account Manager',
        desc: 'We provide you with a dedicated account manager to help you with any issues or questions you may have.',
        image: productSupportImage
    },
    {
        icon: <MdOutlineSupportAgent size={32} />,
        title: 'Custom Development',
        desc: 'We can help you with custom development to help you get the most out of our platform.',
        image: productSupportImage
    },
    {
        icon: <MdOutlineSupportAgent size={32} />,
        title: 'Training',
        desc: 'We provide training to help you get the most out of our platform.',
        image: productSupportImage
    },
]

const ProductSupport = () => {
    return (
        <div className='container flex w-full py-16'>
            <div className='flex w-[1200px] mx-auto flex-col gap-4 items-center px-20 text-center leading-snug'>
                <h2 className='text-[48px]'>Experience the simplicity of building live experiences</h2>
                <p className='text-gray-500 dark:text-gray-400 font-light text-lg'>From one-to-one interactions to unlimited scalability in a single SDK. No need to set up, babysit, and burn dollars with multiple SDKs.</p>

                <div className='grid grid-cols-2 gap-6'>
                    {
                        productSupports.map((support, index) => (
                            <ProductSupportCard key={index} icon={support.icon} title={support.title} desc={support.desc} image={support.image} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default ProductSupport