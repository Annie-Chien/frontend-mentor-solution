import styled from 'styled-components';
import { MEDIA_QUERY } from "../../constants";

const JobItemContainer = styled.li`
  background-color: white;
  padding: 4rem 2rem 2rem;
  box-shadow: 0 2px 1rem hsla(180, 14%, 20%, 0.2);
  position: relative;
  border-radius: .5rem;
  border-left: ${({featured}) => featured ? '5px solid var(--color-primary-cyan)': 'none'};

  @media (min-width: ${MEDIA_QUERY.DESKTOP}) {
    padding: 2rem 1rem;
      display: grid;
      grid-template-columns: max-content 1fr max-content;
      grid-template-rows: repeat(3 ,max-content);
      align-items: center;
      column-gap: 1.5rem
  }
`
const JobImage = styled.img`
    width: 5rem;
    position: absolute;
    top: -2.5rem;

    @media (min-width: ${MEDIA_QUERY.DESKTOP}) {
      width: 6rem;
      position: static;
      grid-row: 1 / -1;
  }
`
const JobCompanyWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (min-width: ${MEDIA_QUERY.DESKTOP}) {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
  }
`

const JobCompany = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--color-primary-cyan);
    margin-right: 1rem;
`
const JobTagNew = styled.div`
    padding: .8rem .8rem .4rem;
    font-size: 1.5rem;
    color: white;
    text-transform: uppercase;
    background-color: var(--color-primary-cyan);
    border-radius: 5rem;
`
const JobTagFeature = styled(JobTagNew)`
    background-color: var(--color-cyan-darker);
`

const JobPositoin = styled.p`
    margin: 1.5rem 0;
    font-weight: bold;
    text-transform: capitalize;
    @media (min-width: ${MEDIA_QUERY.DESKTOP}) {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
  }
`
const JobDetailWrapper = styled.div`
   margin: 1.5rem 0;
   display: flex;
   align-items: center;
   gap: 1rem;

   @media (min-width: ${MEDIA_QUERY.DESKTOP}) {
    margin: 0;
  }
`

const BulletPoint = styled.div`
    width: 5px;
    height: 5px;
    background-color: var(--color-cyan-dark);
    border-radius: 50%;
`
const JobDetail = styled.span`
  color: var(--color-cyan-dark);
`

const JobFilterContainer = styled.div`
  padding-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  border-top: 1px solid var(--color-cyan-dark);

  @media (min-width: ${MEDIA_QUERY.DESKTOP}) {
      grid-row: 1 / -1;
      grid-column: 3 / 4;
      border-top: none;
  }

`
const JobFilterButton = styled.button`
  padding: .5rem 1rem;
  color: var(--color-primary-cyan);
  font-weight: bold;
  text-transform: capitalize;
  background-color: var(--color-filter-tablets);
  border-radius: .5rem;
  transition: all .25s;

  &:hover{
    background-color: var(--color-primary-cyan);
    color: white;
  }
`

export {JobItemContainer, JobImage, JobCompanyWrapper, JobCompany, JobTagFeature, JobTagNew, JobDetailWrapper, JobPositoin, JobDetail, BulletPoint, JobFilterContainer, JobFilterButton }