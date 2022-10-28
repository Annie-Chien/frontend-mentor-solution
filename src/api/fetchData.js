import { useQuery } from '@tanstack/react-query';
const BASE_URL = 'https://restcountries.com/v3.1';
const FIELDS_OVERVIEW = 'fields=name,capital,region,population,flags,cca3';
const FIELDS_DETAIL =
  'fields=name,flags,population,region,subregion,capital,currencies,tld,languages,borders';

const fetchCountryData = async (parameter, value) => {
  let url;
  switch (parameter) {
    case 'region':
      url = `${BASE_URL}/region/${value}?${FIELDS_OVERVIEW}`;
      break;
    default:
      url = `${BASE_URL}/all?${FIELDS_OVERVIEW}`;
  }
  const res = await fetch(url);

  return res.json();
};

const fetchDetail = async (id) => {
  let url = `${BASE_URL}/alpha/${id}?${FIELDS_DETAIL}`;
  const res = await fetch(url);

  return res.json();
};

export const useGetCountries = (parameter, value) => {
  return useQuery(['countries', parameter, value], () =>
    fetchCountryData(parameter, value)
  );
};

export const useGetDetails = (id) => {
  return useQuery(['details', id], () => fetchDetail(id));
};
