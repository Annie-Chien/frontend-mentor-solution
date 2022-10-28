import React from 'react';

import { CountryContainer, CountryImg, CountryText } from './CountryItemStyle';

const CountryItem = ({ countryData }) => {
  const { capital, flags, name, population, region } = countryData;

  return (
    <CountryContainer>
      <CountryImg>
        <img src={flags.svg} alt={name.common} />
      </CountryImg>

      <CountryText>
        <h2 className="country-name">{name.common}</h2>
        <div className="country-detail">
          <p>
            <span className="font-bold">population:</span>{' '}
            {population.toLocaleString()}
          </p>
          <p>
            <span className="font-bold">region:</span> {region}
          </p>
          <p>
            <span className="font-bold">capital:</span> {capital}
          </p>
        </div>
      </CountryText>
    </CountryContainer>
  );
};

export default CountryItem;
