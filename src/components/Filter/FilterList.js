import React from 'react';
import FilterTag from './FilterTag';
import {StyledFilterList, FilterTagContainer, ClearAllButton} from './FilterListStyles';


const FilterList = ({filterList, handleRemoveFilterTag, handleClearAll}) => {

  return (
    <StyledFilterList>
      <FilterTagContainer>
        {filterList.map((filter, index) => <FilterTag filterLabel={filter} key={index} handleRemoveFilterTag={handleRemoveFilterTag}/>)}
      </FilterTagContainer>
      <ClearAllButton onClick={handleClearAll}>Clear</ClearAllButton>
    </StyledFilterList>
  );
};

export default FilterList;
