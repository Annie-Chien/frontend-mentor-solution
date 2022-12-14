import styled, { createGlobalStyle } from 'styled-components';
import { devices } from './constants';

const GlobalStyle = createGlobalStyle`
:root{
    --clr-primary: hsl(26, 100%, 55%);
    --clr-primary-pale: hsl(25, 100%, 94%);
    --clr-blue-dark: hsl(220, 13%, 13%);
    --clr-blue-dark-grayish:hsl(219, 9%, 45%);
    --clr-blue-grayish:hsl(220, 14%, 75%);
    --clr-white:hsl(0, 0%, 100%);
    --lightbox-bg: hsl(0, 0%, 0%);
}

*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

html{
    font-size: 62.5%;

  
}

body{
    font-size: 1.6rem;
    font-family: 'Kumbh Sans', sans-serif;
    position: relative;
}

h1{
    font-size: 4rem;
    color: var(--clr-white);
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
    @media ${devices.laptop} {
        font-size: 5rem;
  }
}

h2{
    font-size: 3rem;
    @media ${devices.laptop} {
        font-size: 3.5rem;
  }
}

h3{
    font-size: 2rem;
    
}

h4{
    font-size: 1.7rem;

  
}

img{
    max-width: 100%;
    display: block;
}

button{
    border: none;
    cursor: pointer;
    background-color: transparent;
}

a{
  color: currentColor;
}

`;

export default GlobalStyle;

//==========================================//

//Shared Components
export const SContainer = styled.div`
  width: 100%;
  max-width: 150rem;
  margin: auto;
  padding-bottom: 10rem;
  position: relative;

  @media ${devices.laptop} {
    width: 90%;
  }
`;

export const SButton = styled.button`
  width: 100%;
  color: var(--clr-white);
  background-color: var(--clr-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 0.5rem;
  transition: all 0.3s;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);

  &:hover {
    background-color: hsla(26, 100%, 55%, 0.8);
  }

  &:active {
    transform: translateY(2px);
  }
`;
