import styled from 'styled-components';

const GirdContainer = styled.ul`
  padding-bottom: 8rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  justify-items: center;
  position: relative;
`;

const Pagination = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export { GirdContainer, Pagination };
