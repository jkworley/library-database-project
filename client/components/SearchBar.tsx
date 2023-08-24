"use client";

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

import SearchRecords from './SearchRecords';
import Image from 'next/image';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image 
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = () => {
  
  const [recordType, setRecordType] = useState("")
  const [category, setCategory] = useState("")

  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(recordType === "" && category === "") {
      return alert("Please enter search paramaters")
    }

    // updateSearchParams(category.toLowerCase(), recordType.toLowerCase())
    updateSearchParams(category, recordType)

  }

  const updateSearchParams = (category: string, recordType: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    if(category) {
      searchParams.set("category", category)
    } else {
      searchParams.delete("category")
    }

    if(recordType) {
      searchParams.set("recordType", recordType)
    } else {
      searchParams.delete("recordType")
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname)
  }

  return (
    <form className="searchbar" onSubmit={handleSearch} >
      <div className="searchbar__item">
        <SearchRecords recordType={recordType} setRecordType={setRecordType} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image 
          src="/category.svg"
          alt="magnifying glass"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="category"
          value={category}
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar