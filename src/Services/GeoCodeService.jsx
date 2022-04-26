import AxiosClient from '@Utils/Http/AxiosClient';

export const geoCodeService = {
  getGeoCodeByCity(cityName) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      cityName
    )}+VN&key=${process.env.REACT_APP_API_KEY_GOOGLE}`;

    return AxiosClient.get(url);
  },

  // getGeoCodeByAddress(address, province) {
  //   const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //     address
  //   )}+CA&key=YOUR_API_KEY`;

  //   return AxiosClient.get(url);
  // },

  // getGeoCodeByCoordinates(longitude, latitude) {
  //   const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${longitude},${latitude}.json?access_token=${process.env.REACT_APP_TOKEN_GEOCODE}`;

  //   return AxiosClient.get(url);
  // },
};
