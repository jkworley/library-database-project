import { FilterProps } from "@/types"

export async function fetchRecords(filters: FilterProps) {
    const { recordType, category } = filters
    
    const response = await fetch(`http://127.0.0.1:8000/search_records?recordType=${recordType}&category=${category}`)
    
    const result = await response.json()

    console.log(result)

    return result
}