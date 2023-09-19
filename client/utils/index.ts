import { FilterProps, RecordProps } from "@/types"

export async function fetchRecords(filters: FilterProps) {
    const { recordType, category } = filters
    
    const response = await fetch(`http://127.0.0.1:8000/records/search_records?recordType=${recordType}&category=${category}`)
    
    const result = await response.json()

    console.log(result)

    return result
}

export async function postRecord(record: RecordProps) {
    
    const response = await fetch("http://127.0.0.1:8000/records", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
          },
        body: JSON.stringify(record)
    })

    console.log(response)

    if (!response.ok) {
        throw new Error("Failed to submit form data")
    }
    
    console.log(record)
}