import styled from 'styled-components';

const SearchForm = styled.div`
  padding: 1rem 1.5rem;
  background-color: var(--color-element);
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;

  & > input {
    width: 100%;
    color: inherit;
    background-color: transparent;
    font-size: 1.6rem;
    border: none;
    outline: none;
  }
`;

export { SearchForm };
