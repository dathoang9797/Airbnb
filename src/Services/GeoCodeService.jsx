import { handleChooseStartLoading, handleChooseEndLoading } from '@Utils/Common';
import { removeSpace, removeUnicode } from '@Utils/Common';

export const geoCodeService = {
  getGeoCodeByAddress(address, isLoading = false, isLoadingPopup = true) {
    const header = { isLoading, isLoadingPopup };
    handleChooseStartLoading(header);
    const url = `${process.env.REACT_APP_URL_GEOCODE_GOOGLE}?address=${encodeURIComponent(
      address
    )}&language=vi&region=vi&key=${process.env.REACT_APP_API_KEY_GOOGLE}`;

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

  getGeoCodeByCoordinates(
    longitude,
    latitude,
    danhSachProvince,
    isLoading = false,
    isLoadingPopup = true
  ) {
    const header = { isLoading, isLoadingPopup };
    handleChooseStartLoading(header);
    const url = `${process.env.REACT_APP_URL_GEOCODE_GOOGLE}?latlng=${latitude},${longitude}&language=vi&region=vi&key=${process.env.REACT_APP_API_KEY_GOOGLE}`;
    return fetch(url).then((response) =>
      response
        .json()
        .then((data) => {
          handleChooseEndLoading(header);
          const results = data.results.map((result) => {
            console.log({ result });
            const { address_components } = result;
            const provinces = address_components
              .reverse()
              .map((item) => {
                const province = item.long_name;
                const formatProvince = removeUnicode(removeSpace(province));
                if (danhSachProvince.every((province) => !province.includes(formatProvince))) {
                  return null;
                }
                return formatProvince;
              })
              .filter((item) => item !== null);
            //Remove element duplicate
            return [...new Set(provinces)];
          });

          return [...new Set(results.flat())];
        })
        .catch(() => {
          handleChooseEndLoading(header);
        })
    );
  },
};
