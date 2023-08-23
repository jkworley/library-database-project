"use client";

import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {

    const handleScroll = () => {

    }

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">Library Database</h1>
                <p className="hero__subtitle">Browse and store your personal library</p>
                <CustomButton 
                    title="Explore Library"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
        </div>
    )
}

export default Hero