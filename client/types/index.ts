import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchRecordsProps {
    records: string;
    setRecords: (record: string) => void;
}

export interface RecordProps {
    id: string;
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: string;
    categories: string[];
    imageLinks: object;
    googleBooksId: string;
    recordType: string;
}