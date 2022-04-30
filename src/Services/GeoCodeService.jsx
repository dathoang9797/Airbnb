import { handleChooseStartLoading, handleChooseEndLoading } from '@Utils/Common';

export const geoCodeService = {
  isLoadingPopup: true,
  getGeoCodeByCity(geocoderQuery) {
    handleChooseStartLoading(this.isLoadingPopup);
    const url = `${process.env.REACT_APP_URL_GEOCODE_GOOGLE}?address=${encodeURIComponent(
      geocoderQuery
    )}`;

    return fetch(url).then((response) =>
      response.json().then((data) => {
        handleChooseEndLoading(this.isLoadingPopup);
        return data.results;
      })
    );
  },

  getGeoCodeByAddress(address, locationName) {
    handleChooseStartLoading(this.isLoadingPopup);
    const url = `${process.env.REACT_APP_URL_GEOCODE_GOOGLE}?address=${encodeURIComponent(
      address
    )}&lang=vi&region=${locationName}&key=${process.env.REACT_APP_API_KEY_GOOGLE}`;

    return fetch(url).then((response) =>
      response.json().then((data) => {
        handleChooseEndLoading(this.isLoadingPopup);
        return data.results;
      })
    );
  },

  getGeoCodeByCoordinates(longitude, latitude) {
    handleChooseStartLoading(this.isLoadingPopup);
    const url = `${process.env.REACT_APP_URL_GEOCODE_GOOGLE}?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_API_KEY_GOOGLE}`;

    return fetch(url).then((response) =>
      response.json().then((data) => {
        handleChooseEndLoading(this.isLoadingPopup);
        return data.results;
      })
    );
  },
};
