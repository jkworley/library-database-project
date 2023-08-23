import Image from 'next/image'

import { CustomFilter, Hero, RecordCard, SearchBar } from '@/components'
import { fetchRecords } from '@/utils'

export default async function Home() {
  const allRecords = await fetchRecords()

  const isDataEmpty = !Array.isArray(allRecords) || allRecords.length < 1 || !allRecords

  console.log(allRecords)

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalog</h1>
          <p>Explore the library</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="title" />
            <CustomFilter title="author" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__records-wrapper">
              {allRecords?.map((record) => (
                <RecordCard record={record} />
              ))}
            </div>
          </section>  
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No records found...</h2>
          </div>
        )}
      </div>
    </main>
  )
}
