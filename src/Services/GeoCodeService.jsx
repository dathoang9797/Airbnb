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
          const results = data.results;
          const lengthThanhPho = 'thanhpho';
          console.log({ results });
          const provinces = results[0].address_components
            .map((item, index) => {
              const province = item.long_name;
              const formatProvince = removeUnicode(removeSpace(province));
              if (formatProvince === 'thanhphohoian') {
                return formatProvince.slice(lengthThanhPho.length);
              }
              return formatProvince;
            })
            .map((formatProvince) => {
              if (danhSachProvince.every((province) => province !== formatProvince)) {
                return null;
              }
              return formatProvince;
            })
            .filter((item) => item !== null);
          return provinces;
        })
        .catch(() => {
          handleChooseEndLoading(header);
        })
    );
  },
};
