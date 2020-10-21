import React from "react";
import data from './data.json';
import Header from "./components/Header";
import Job from "./components/Job";

export default function App() {
  return (
    <div className="app">
      <Header />
      {data.map((job) => {
        return <Job
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
