import React from 'react';
import JobItem from './JobItem';
import { StyledJobList } from './StyledJobList';

const JobList = ({jobList, handleAddFilterTag, updateJobList}) => {
  return (
    <main>
      <StyledJobList>
        {jobList.map(job => {
          return <JobItem jobData={job} key={job.id} handleAddFilterTag={handleAddFilterTag} />
        })}
      </StyledJobList>
    </main>
  );
};

export default JobList;
