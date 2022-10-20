import styled from 'styled-components';

const StyledFilterList = styled.div`
  width: 90%;
  padding: 2rem;
  margin: auto;
  transform: translateY(-50%);
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 1rem hsla(180, 14%, 20%, 0.1);
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const FilterTagContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  row-gap: 1.5rem;
  column-gap: 1rem;
  flex-wrap: wrap;

`;

const ClearAllButton = styled.button`
  font-weight: bold;
  background-color: transparent;
  color: var(--color-cyan-dark);
  line-height: 5rem;
  vertical-align: middle;
  user-select: none;
  transition: color .25s;
  
  &:hover{
    color: var(--color-primary-cyan);
  }
`;

export {StyledFilterList, FilterTagContainer, ClearAllButton};