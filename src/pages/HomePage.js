// React Components
import Search from '../components/Search/Search';
import Filter from '../components/Filter/Filter';
import CountryGrid from '../components/Countries/CountryGrid';
// Styled Components
import { MainContainer, SearchFilterContainer } from './PageStyle';

const HomePage = () => {
  return (
    <MainContainer>
      <SearchFilterContainer>
        <Search />
        <Filter />
      </SearchFilterContainer>
      <CountryGrid />
    </MainContainer>
  );
};

export default HomePage;
