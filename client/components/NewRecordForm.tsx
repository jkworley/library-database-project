"use client";

import { ChangeEvent, FormEvent, useState } from 'react'
import FormField from './FormField'
import { CustomButton } from '.';
import { postRecord } from '@/utils';
import { useRouter } from 'next/navigation';

const NewRecordForm = () => {

    const router = useRouter()

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        setIsSubmitting(true)

        console.log(form)

        try {
            postRecord(form)

            router.push("/")
        } catch (error) {
            console.log(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleStateChange = (fieldName: string, value: string) => {
        setForm((prevState) => (
            { ...prevState, [fieldName]: value }
        ))
    }

    const [isSubmitting, setIsSubmitting] = useState(false)

    const [form, setForm] = useState({
        title: "",
        composer: "",
        publisher: "",
        publishedDate: "",
        description: "",
        pageCount: "",
        category: "",
        imageLink: "",
        googleBooksId: "",
        recordType: ""
    })
  
    return (
    <form
        onSubmit={handleFormSubmit}
        className="flex items-center justify-start form"
    >
        {/* <div className="flex items-center justify-start form form_image-container">
            <label htmlFor="" className="flex justify-center items-center form_image-label">
                IMAGE
            </label>
        </div> */}
        <FormField
            title="Title"
            state={form.title}
            placeholder="Title"
            setState={(value) => handleStateChange("title", value)}
        />
        <FormField
            title="Composer"
            state={form.composer}
            placeholder="Composer"
            setState={(value) => handleStateChange("composer", value)}
        />
        <FormField
            title="Publisher"
            state={form.publisher}
            placeholder="Publisher"
            setState={(value) => handleStateChange("publisher", value)}
        />
        <FormField
            title="Publication Year"
            state={form.publishedDate}
            placeholder="Publication Year"
            setState={(value) => handleStateChange("publishedDate", value)}
        />
        <FormField
            title="Description"
            state={form.description}
            placeholder="Description"
            setState={(value) => handleStateChange("description", value)}
        />
        <FormField
            title="Page Count"
            state={form.pageCount}
            placeholder="Page Count"
            setState={(value) => handleStateChange("pageCount", value)}
        />
        <FormField
            title="Record Type"
            state={form.recordType}
            placeholder="Record Type"
            setState={(value) => handleStateChange("recordType", value)}
        />
        <FormField
            title="Image URL"
            state={form.imageLink}
            placeholder="Image URL"
            setState={(value) => handleStateChange("imageLink", value)}
        />
        <FormField
            title="Google Books ID"
            state={form.googleBooksId}
            placeholder="Google Books ID"
            setState={(value) => handleStateChange("googleBooksId", value)}
        />
        <FormField
            title="Category"
            state={form.category}
            placeholder="Category"
            setState={(value) => handleStateChange("category", value)}
        />
        <div className="flex items-center justify-start w-full">
            <CustomButton
                title={isSubmitting ? "Creating Record" : "Create New Record"}
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                btnType="submit"
                isDisabled={isSubmitting}
            />
        </div>
    </form>
  )
}

export default NewRecordForm