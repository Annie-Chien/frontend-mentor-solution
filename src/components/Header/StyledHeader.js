import styled from "styled-components";
import {MEDIA_QUERY} from '../../constants'

export const StyledHeader = styled.header`
  height: 20vh;
  background-image: url('images/bg-header-mobile.svg');
  background-color: var(--color-primary-cyan);

  @media (min-width: ${MEDIA_QUERY.DESKTOP}) {
    background-image: url('images/bg-header-desktop.svg');
  }
`