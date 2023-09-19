"use client";

import { Fragment } from 'react';
import Image from 'next/image';

import { Dialog, Transition } from '@headlessui/react'

import { RecordProps } from '@/types';

interface RecordDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    record: RecordProps;
}

const RecordDetails = ({ isOpen, closeModal, record }: RecordDetailsProps) => {
  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                                >
                                    <Image 
                                        src="/close.svg"
                                        alt="close"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                </button>
                                <div className="flex-1 flex flex-col gap-3">
                                    <div className="relative w-full h-80 bg-pattern bg-cover bg-center rounded-lg">
                                        <Image 
                                            src={record.imageLink} 
                                            alt="record image"  
                                            fill
                                            priority
                                            className="object-contain p-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <h2 className="font-semibold text-xl">
                                        {record.title}
                                    </h2>
                                    <p>
                                        {record.composer}
                                    </p>
                                    <div className="mt-3 flex flex-wrap">
                                        {/* {Object.entries(record).map(([key, value]) => 
                                            <div className="flex justify-between gap-5 w-full text-right" key={key}>
                                                <h4>{key}</h4>
                                                <p>{value}</p>
                                            </div>
                                        )} */}
                                        <div className="flex justify-between gap-5 w-full text-right" key={record.publisher}>
                                            <h4 className="text-grey">Publisher</h4>
                                            <p className="text-black-100 font-semibold">{record.publisher}</p>
                                        </div>
                                        <div className="flex justify-between gap-5 w-full text-right" key={record.publishedDate}>
                                            <h4 className="text-grey">Date Published</h4>
                                            <p className="text-black-100 font-semibold">{record.publishedDate}</p>
                                        </div>
                                        <div className="flex justify-between gap-5 w-full text-right" key={record.pageCount}>
                                            <h4 className="text-grey">Page Count</h4>
                                            <p className="text-black-100 font-semibold">{record.pageCount}</p>
                                        </div>
                                        <div className="flex justify-between gap-5 w-full text-right" key={record.publisher}>
                                            <h4 className="text-grey">Categories</h4>
                                            <p className="text-black-100 font-semibold">{record.category}</p>
                                        </div>
                                        <div className="flex justify-between gap-5 w-full text-right" key={record.recordType}>
                                            <h4 className="text-grey">Record Type</h4>
                                            <p className="text-black-100 font-semibold">{record.recordType}</p>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default RecordDetails