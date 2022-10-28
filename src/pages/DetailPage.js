import { useEffect } from 'react';
//Reacr Router
import { Link, useParams } from 'react-router-dom';
// Custom Hooks
import { useGetDetails } from '../api/fetchData';
import { useCountryContext } from '../store/CountryContextProvider';
//React Components
import Loader from '../components/Loader/Loader';
// Styled Components
import {
  MainContainer,
  BorderBtn,
  ReturnBtn,
  DetailContainer,
  DetailImg,
  DetailText,
  BordersContainer,
} from './PageStyle';

//Code to Country(Setup)
const countries = require('i18n-iso-countries');
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

const DetailPage = () => {
  const { id } = useParams();
  const { enterName } = useCountryContext();

  const { data, isLoading, isError } = useGetDetails(id);

  const covertCodeToCountry = (code) => {
    return countries.getName(code, 'en', { select: 'alias' });
  };

  useEffect(() => {
    enterName('');
  }, [enterName]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Something went wrong</h1>;
  }

  const {
    name: { common, nativeName: nativeNameObj },
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages: langObg,
    borders: borderCodes,
    flags,
  } = data;
  const currency = Object.values(currencies)[0].name;
  const nativeName = Object.values(nativeNameObj)[0].common;
  const languagesArr = Object.values(langObg);

  return (
    <MainContainer>
      <ReturnBtn>
        <Link to="/">
          <i className="fa-solid fa-arrow-left"></i> Back
        </Link>
      </ReturnBtn>
      <DetailContainer>
        <DetailImg>
          <img src={flags.svg} alt={common} />
        </DetailImg>
        <DetailText>
          <h2>{common}</h2>
          <div>
            <p>
              <span className="font-bold">Native Name:</span> {nativeName}
            </p>
            <p>
              <span className="font-bold">Population:</span>{' '}
              {population.toLocaleString()}
            </p>
            <p>
              <span className="font-bold">Region:</span> {region}
            </p>
            <p>
              <span className="font-bold">Sub Region:</span> {subregion}
            </p>
            <p>
              <span className="font-bold">Capital:</span> {capital}
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">Top Level Domain:</span>{' '}
              {tld.join(', ')}
            </p>
            <p>
              <span className="font-bold">Currencies:</span> {currency}
            </p>
            <p>
              <span className="font-bold">Languages:</span>{' '}
              {languagesArr.join(', ')}
            </p>
          </div>

          <BordersContainer>
            <p className="font-bold">Border Countries: </p>
            {borderCodes.map((code, index) => {
              const border = covertCodeToCountry(code);
              return (
                <BorderBtn key={index}>
                  <Link to={`../detail/${code}`}>{border}</Link>
                </BorderBtn>
              );
            })}
          </BordersContainer>
        </DetailText>
      </DetailContainer>
    </MainContainer>
  );
};

export default DetailPage;
