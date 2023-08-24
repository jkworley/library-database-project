"use client";

import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react'

import { recordTypes } from '@/constants';
import { SearchRecordsProps } from '@/types'

const SearchRecords = ({ recordType, setRecordType }: SearchRecordsProps) => {
    
    const [searchTerm, setSearchTerm] = useState("")
    
    const filteredRecordTypes = searchTerm === "" 
        ? recordTypes 
        : recordTypes.filter((item) => (
            item.toLowerCase()
            .replace(/\s+/g, "")
            .includes(searchTerm.toLowerCase().replace(/\s+/g, ""))
        ))

    return (
    <div className="search-records">
        <Combobox value={recordType} onChange={setRecordType}>
            <div className="relative w-full">
                <Combobox.Button className="absolute top-[14px]">
                    <Image 
                        src="/book.svg"
                        width={20}
                        height={20}
                        className="ml-4"
                        alt="Book Logo"
                    />
                </Combobox.Button>
                <Combobox.Input 
                    className="search-records__input" 
                    placeholder="Record Type"
                    displayValue={(record: string) => record}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Transition 
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setSearchTerm("")}
                >
                    <Combobox.Options>
                        {filteredRecordTypes.map((item) => (
                                <Combobox.Option
                                    key={item}
                                    className={({ active }) => `relative search-records__option ${active ? "bg-primary-blue text-white" : "text-gray-900"}`}
                                    value={item}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                }`}
                                            >
                                                {item}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                    active ? 'text-white' : 'text-teal-600'
                                                    }`}
                                                >
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            )
                        )}
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchRecords