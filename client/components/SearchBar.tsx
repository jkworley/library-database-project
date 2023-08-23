"use client";

import React, { useState } from 'react'

import { SearchRecords } from './';
import Image from 'next/image';

const SearchButton = ({ otherClasses }: {otherClasses: string}) => (
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
  
  const [records, setRecords] = useState("")

  const handleSearch = () => {}

  return (
    <form className="searchbar" onSubmit={handleSearch} >
      <div className="searchbar__item">
        <SearchRecords records={records} setRecords={setRecords} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item"></div>
    </form>
  )
}

export default SearchBar