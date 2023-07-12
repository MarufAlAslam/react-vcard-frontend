import React from 'react'
import { Link } from 'react-router-dom'

import { FaAddressCard, FaSave, FaShareAlt } from 'react-icons/fa'

const HowItWorks = () => {
    const steps =[
        {
            id: 1,
            icon: <FaAddressCard className='text-5xl text-white'/>,
            title: 'Create Your Card',
            desc: <p className='text-white'>It takes 2 minutes. Click <Link to="" className='text-yellow-500'>here</Link> to begin</p>
        },
        {
            id: 2,
            icon: <FaSave className='text-5xl text-white'/>,
            title: 'Save Your Card',
            desc: <p className='text-white'>Digital Visiting Card is accessible anytime from anywhere</p>
        },
        {
            id: 2,
            icon: <FaShareAlt className='text-5xl text-white'/>,
            title: 'Share Your Card',
            desc: <p className='text-white'>Share through a variety of channels</p>
        }
    ]
    return (
        <div className='howItWorks py-[100px]'>
            <div className="container">
                <div className="text-center">
                    <h2 className="text-4xl text-[#5F36E0] font-bold mb-3">
                        How It Works
                    </h2>
                    <p className="text-lg mb-8">
                        These are the steps to create your own digital business card.
                    </p>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                        {
                            steps.map(step => (
                                <div className='step bg-primary p-10 rounded-md h-full' key={step.id}>
                                    <div className='flex justify-center items-center mb-5'>
                                        {step.icon}
                                    </div>
                                    <h3 className='text-2xl font-bold mb-3 text-white'>{step.title}</h3>
                                    {step.desc}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks