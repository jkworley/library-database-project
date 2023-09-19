"use client";

import { postRecord } from '@/utils';
import { RecordProps } from '@/types';

import NewRecordForm from '@/components/NewRecordForm';
import CustomButton from '../../components/CustomButton'
import { Dialog } from '@headlessui/react';
import Modal from '@/components/Modal';

const CreateRecord = () => {

    const recordToPost: RecordProps = {
        title: "Tuba Concerto",
        composer: "Edward Gregson",
        publisher: "Novello",
        publishedDate: "2003",
        description: "This work is dedicated to John Fletcher, who gave the first performance on 24 April 1976. The concerto is in three movements, the first in sonata-form shell with two contrasting themes. There is a reference made in the development section to the opening theme of Vaughan Williams' Tuba Concerto.",
        pageCount: "30",
        category: "Sheet Music",
        imageLink: "https://www.jwpepper.com/cdn-cgi/image/width=190%20quality=75/covers/5/5306246.gif",
        googleBooksId: "sacCtwEACAAJ",
        recordType: "Concertos (Tuba)"
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        postRecord(recordToPost)
    }

    const closeModal = () => {

    }

    return (
        <Modal>
            <h3 className="modal-head-text">Create a New Record</h3>
            <NewRecordForm type="create"/>
        </Modal>
        // <form onSubmit={handleSubmit} className="">
        //     <div className="create-records">
        //         {/* <label htmlFor="title">Title: </label> */}
        //         <input type="title" name="title" id="title" placeholder="Title" className="create-records__input" required />
        //     </div>
        //     <div className="create-records">
        //         {/* <label htmlFor="author">Author: </label> */}
        //         <input type="author" name="author" id="author" placeholder="Author" className="create-records__input" required />
        //     </div>
        //     <div className="create-records">
        //         {/* <label htmlFor="publisher">Publisher: </label> */}
        //         <input type="publisher" name="publisher" id="publisher" placeholder="Publisher" className="create-records__input" required />
        //     </div>
        //     <div className="create-records">
        //         {/* <label htmlFor="publication-year">Publication Year: </label> */}
        //         <input type="publication-year" name="publication-year" id="publication-year" placeholder="Publication Year" className="create-records__input" required />
        //     </div>
        //     <div className="create-records">
        //         {/* <label htmlFor="description">Description: </label> */}
        //         <input type="description" name="description" id="description" placeholder="Description" className="create-records__input" required />
        //     </div>
        //     <div className="create-records">
        //         {/* <label htmlFor="page-count">Page Count: </label> */}
        //         <input type="page-count" name="page-count" id="page-count" placeholder="Page Count" className="create-records__input" required />
        //     </div>
        //     <div className="create-records">
        //         {/* <label htmlFor="category">Category: </label> */}
        //         <input type="category" name="category" id="category" placeholder="Category" className="create-records__input" required />
        //     </div>
        //     <div className="create-records">
        //         {/* <label htmlFor="image-url">Image URL: </label> */}
        //         <input type="image-url" name="image-url" id="image-url" placeholder="Image URL" className="create-records__input" required />
        //     </div>
        //     <div className="create-records">
        //         {/* <label htmlFor="google-book-id">Google Book ID: </label> */}
        //         <input type="google-book-id" name="google-book-id" id="google-book-id" placeholder="Google Book ID" className="create-records__input" required />
        //     </div>
        //     <div className="create-records">
        //         {/* <label htmlFor="record-type">Record Type: </label> */}
        //         <input type="record-type" name="record-type" id="record-type" placeholder="Record Type" className="create-records__input" required />
        //     </div>
        //     <CustomButton 
        //         title="Create New Record"
        //         btnType="submit"
        //         containerStyles="bg-primary-blue text-white rounded-full mt-10"
        //     />
        // </form>
    )
}

export default CreateRecord