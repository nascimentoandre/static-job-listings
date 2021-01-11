import React, { useState } from "react";
import data from './data.json';
import Header from "./components/Header";
import Job from "./components/Job";

export default function App() {
  const [searchItem, setSearchItem] = useState('');

  const filteredJobs = data.filter(job => {
    return job.level.toLowerCase().includes(searchItem.toLowerCase()) || 
    job.company.toLowerCase().includes(searchItem.toLowerCase()) || 
    job.position.toLowerCase().includes(searchItem.toLowerCase()); 
  });

  return (
    <div className="app">
      <Header />
      <div className="search-container">
        <input type="text" className="search-bar" name="search" placeholder="Search..." onChange={e => setSearchItem(e.target.value)} />
      </div>
      {filteredJobs.map((job) => {
        return <Job
          key={job.id}
          id={job.id}
          logo={job.logo}
          company={job.company}
          new={job.new}
          featured={job.featured}
          position={job.position}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          role={job.role}
          level={job.level}
          languages={job.languages}
          tools={job.tools}/>
      })}
    </div>
  );
}
