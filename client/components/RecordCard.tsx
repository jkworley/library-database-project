"use client";

import { useState } from 'react'
import Image from 'next/image'

import { RecordProps } from '@/types'
import CustomButton from './CustomButton'
import { RecordDetails } from '.'

interface RecordCardProps {
    record: RecordProps
}

const RecordCard = ({ record }: RecordCardProps) => {
    const [isOpen, setisOpen] = useState(false)

    const {
        id,
        title,
        composer,
        publisher,
        publishedDate,
        description,
        pageCount,
        category,
        imageLink,
        googleBooksId,
        recordType
    } = record

    let shortDescription = description.substring(0, 250)
  
    return (
    <div className="record-card group">
        <div className="h-20">
            <div className="record-card__content">
                <h2 className="record-card__content-title">
                    {title}
                </h2>
            </div>
            <p>
                {composer}
            </p>
        </div>
        <div className="relative w-full h-60 my-3 object-contain">
            <Image 
                src={imageLink} 
                alt="record image" 
                fill 
                priority
                className="object-contain"
                />
        </div>
        <p className="text-[14px]">
            <span>
                {shortDescription}...
            </span>
        </p>
        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray h-12">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[14px]">
                        {publisher}, {publishedDate}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[14px]">
                        {pageCount} pages
                    </p>
                </div>
            </div>
            <div className="record-card__btn-container">
                <CustomButton
                    title="View More"
                    containerStyles="w-full py-[16px] rounded-full bg-primary-blue" 
                    textStyles="text-white text-[14px] leading-[17px] font-bold"
                    rightIcon="/right-arrow.svg"
                    handleClick={() => setisOpen(true)}
                />
            </div>
        </div>
        <RecordDetails 
            isOpen={isOpen}
            closeModal={() => setisOpen(false)}
            record={record}
        />
    </div>
  )
}

export default RecordCard