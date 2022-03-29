import AxiosClient from '@Utils/Http/AxiosClient';

export const geoCodeService = {
  getGeoCode(address) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?access_token=${process.env.REACT_APP_TOKEN_GEOCODE}`;
    return AxiosClient.get(url);
  },
};
