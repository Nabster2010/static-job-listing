import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import FilteredCard from "../components/FilteredCard";
import data from "../data.json";
import { Job } from "../utils/TYPES";

const Home: NextPage = () => {
  const [filteredJobs, setFilteredJobs] = useState(data);
  const [filters, setFilters] = useState<string[]>([]);

  function addToFilter(text: string): void {
    if (filters.includes(text)) return;
    setFilters([...filters, text]);
  }
  function clearFilters(): void {
    setFilters([]);
  }
  function removeFilter(text: string): void {
    setFilters(filters.filter((item) => item !== text));
  }

  useEffect(() => {
    let result: Job[] = [];
    data.forEach((job) => {
      filters.every((text) =>
        [...job.languages, ...job.tools].includes(text)
      ) && result.push(job);
    });
    setFilteredJobs(result);
  }, [filters]);

  return (
    <>
      <Head>
        <title>Static Job Listing</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>

      <main className="text-[15px] bg-LightGrayishCyanBg min-h-screen font-LeagueSpartan">
        <div className="w-full bg-DesaturatedDarkCyan">
          <picture>
            <source
              media="(min-width:768px)"
              srcSet="/images/bg-header-desktop.svg"
            />
            <img
              className="w-full max-h-full"
              src="/images/bg-header-mobile.svg"
              alt="header"
            />
          </picture>
        </div>

        {/* container */}
        <section className="flex flex-col items-center justify-start gap-16 py-16 mx-4 md:gap-8">
          <FilteredCard
            filterBy={addToFilter}
            removeFilter={removeFilter}
            clearFilters={clearFilters}
            filters={filters}
            className="mb-8 -mt-24 md:mb-4"
          />
          {filteredJobs.map((job) => (
            <Card key={job.id} data={job} filterBy={addToFilter} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
