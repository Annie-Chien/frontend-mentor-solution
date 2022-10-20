import React from 'react';
import {FilterTagWrap, FilterTagName, RemoveButton } from './FilterTagStyles'

const FilterTag = ({filterLabel, handleRemoveFilterTag}) => {
    return (
        <FilterTagWrap>
            <FilterTagName>{filterLabel}</FilterTagName>
            <RemoveButton><img src='images/icon-remove.svg' alt='x-mark' onClick={()=>handleRemoveFilterTag(filterLabel)}/></RemoveButton>
        </FilterTagWrap>
    );
}

export default FilterTag;
