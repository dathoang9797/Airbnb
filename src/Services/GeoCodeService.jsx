import { handleChooseStartLoading, handleChooseEndLoading } from '@Utils/Common';

export const geoCodeService = {
  getGeoCodeByCity(geocoderQuery, isLoading = false, isLoadingPopup = true) {
    const header = { isLoading, isLoadingPopup };
    handleChooseStartLoading(header);
    const url = `${process.env.REACT_APP_URL_GEOCODE_GOOGLE}?address=${encodeURIComponent(
      geocoderQuery
    )}`;

    return fetch(url).then((response) =>
      response
        .json()
        .then((data) => {
          handleChooseEndLoading(header);
          return data.results;
        })
        .catch(() => {
          handleChooseEndLoading(header);
        })
    );
  },

  getGeoCodeByAddress(address, locationName, isLoading = false, isLoadingPopup = true) {
    const header = { isLoading, isLoadingPopup };
    handleChooseStartLoading(header);
    const url = `${process.env.REACT_APP_URL_GEOCODE_GOOGLE}?address=${encodeURIComponent(
      address
    )}&lang=vi&region=${locationName}&key=${process.env.REACT_APP_API_KEY_GOOGLE}`;

    return fetch(url).then((response) =>
      response
        .json()
        .then((data) => {
          handleChooseEndLoading(header);
          return data.results;
        })
        .catch(() => {
          handleChooseEndLoading(header);
        })
    );
  },

  getGeoCodeByCoordinates(longitude, latitude, isLoading = false, isLoadingPopup = true) {
    const header = { isLoading, isLoadingPopup };
    handleChooseStartLoading(header);
    const url = `${process.env.REACT_APP_URL_GEOCODE_GOOGLE}?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_API_KEY_GOOGLE}`;

    return fetch(url).then((response) =>
      response
        .json()
        .then((data) => {
          handleChooseEndLoading(header);
          return data.results;
        })
        .catch(() => {
          handleChooseEndLoading(header);
        })
    );
  },
};
