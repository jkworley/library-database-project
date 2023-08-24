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
    recordType: string;
    setRecordType: (record: string) => void;
}

export interface RecordProps {
    id: string;
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: string;
    category: string;
    imageLink: string;
    googleBooksId: string;
    recordType: string;
}

export interface FilterProps {
    recordType: string,
    category: string,
    year: number,
}

export interface HomeProps {
    searchParams: FilterProps;
}