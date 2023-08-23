export async function fetchRecords() {
    const response = await fetch("http://127.0.0.1:8000/records")
    
    const result = await response.json()

    return result
}