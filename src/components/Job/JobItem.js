import React from 'react';
// Styles
import {
  JobItemContainer,
  JobImage,
  JobCompanyWrapper,
  JobCompany,
  JobTagNew,
  JobTagFeature,
  JobPositoin,
  JobDetailWrapper,
  JobDetail,
  BulletPoint,
  JobFilterContainer,
  JobFilterButton
} from './JobItemStyles';

const JobItem = ({jobData, handleAddFilterTag, updateJobList}) => {
  const isFeatured = jobData.featured;
  const isNew = jobData.new;
  const {company, contract, role, languages, level, location, logo, position, tools, postedAt} = jobData;
  const jobFilterLabels = [role, level, ...languages, ...tools ];


  return (
    <JobItemContainer featured= {isFeatured}>
      <JobImage src={logo} alt="company logo" />
      <JobCompanyWrapper>
        <JobCompany>{company}</JobCompany>
        {isNew && <JobTagNew>new!</JobTagNew>}
        {isFeatured && <JobTagFeature>featured</JobTagFeature>}
      </JobCompanyWrapper>
      <JobPositoin>{position}</JobPositoin>
      <JobDetailWrapper>
        <JobDetail>{postedAt}</JobDetail>
        <BulletPoint />
        <JobDetail>{contract}</JobDetail>
        <BulletPoint />
        <JobDetail>{location}</JobDetail>
      </JobDetailWrapper>
      <JobFilterContainer>
        {jobFilterLabels.map((label, index) => <JobFilterButton key={index} onClick={()=>handleAddFilterTag(label)}>{label}</JobFilterButton>)}
      </JobFilterContainer>
    </JobItemContainer>
  );
};

export default JobItem;
