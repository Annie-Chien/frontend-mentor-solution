import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header/Header';
import JobList from './components/Job/JobList';
import FilterList from './components/Filter/FilterList';

const App = () => {
  const [jobList, setJobList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const updateJobList = () => {
    const newList = jobList.filter((job) => {
      const jobLabelList = [job.role, job.level, ...job.languages, ...job.tools];

      const matchList = filterList.filter((label) => {
        return jobLabelList.some((jobLabel) => jobLabel === label);
      });

      return matchList.length === filterList.length;
    });

    return newList;
  };

  const filteredJobList = useMemo(()=>updateJobList(), [jobList, filterList]);

  const addFilterTag = (filterTag) => {
    if (filterList.find((filter) => filter === filterTag)) return;
    setFilterList((prev) => [...prev, filterTag]);
  };

  const removeFilterTag = (filterLabel) => {
    const newFilterList = filterList.filter((tag) => tag !== filterLabel);
    setFilterList(newFilterList);
    console.log('Removed!');
  };

  const clearAllFilterTags = () => {
    setFilterList([]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('./data/data.json');
      const data = await res.json();
      setJobList(data);
      // setFilteredJobList(data);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   updateJobList();
  // }, [filterList]);

  return (
    <>
      <Header />
      {filterList.length > 0 && (
        <FilterList
          filterList={filterList}
          handleRemoveFilterTag={removeFilterTag}
          handleClearAll={clearAllFilterTags}
        />
      )}
      <JobList jobList={filteredJobList} handleAddFilterTag={addFilterTag} />
      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Annie-Chien">Annie Chien</a>.
      </div>
    </>
  );
};

export default App;
