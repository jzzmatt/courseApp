"use client";
import React from "react";
import { useState, useRef } from "react";
import JobDetail from "./JobDetail";

const Searching = ({ jobsList }) => {
  const [searchterm, setsearchTerm] = useState("");
  const searchRef = useRef();
  // console.log({ jobsList });
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //console.log(searchRef.current.value);
          setsearchTerm(searchRef.current.value);
        }}>
        <input
          type='text'
          ref={searchRef}
          className='p-1 border rounded mb-2 mt-2'
          placeholder='enter jobs title'
        />
        <button>search</button>
      </form>

      {!jobsList ? (
        <h3>no data...</h3>
      ) : (
        <ul>
          {jobsList.jobs.map((job) => {
            if (searchterm.length === 0) {
              return <JobDetail job={job} key={job.id} />;
            } else if (job.title.startsWith(searchterm)) {
              return <JobDetail job={job} key={job.id} />;
            }
          })}
        </ul>
      )}
    </>
  );
};

export default Searching;
