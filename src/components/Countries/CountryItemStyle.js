import styled from 'styled-components';

const CountryContainer = styled.div`
  height: 32rem;
  max-width: 25rem;
  background-color: var(--color-element);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.25s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CountryImg = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  place-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const CountryText = styled.div`
  padding: 2rem;
  .country-name {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export { CountryContainer, CountryImg, CountryText };
