import CardPopup from '@Components/CardPopup';
import GoogleMapReact from 'google-map-react';
import React from 'react';

function RoomMap({ coordinates, places, danhSachPhongChoThueTheoViTriSlice, setCoordinates }) {
  const renderPlaces = () => {
    if (!places.length || !danhSachPhongChoThueTheoViTriSlice.length) return;
    return places.map((place, index) => {
      if (!place.length || !danhSachPhongChoThueTheoViTriSlice[index]) return null;
      return (
        <CardPopup
          onClick={(e) => {
            console.log({ e });
          }}
          lat={place[0].geometry.location.lat}
          lng={place[0].geometry.location.lng}
          key={`${place[0].place_id}-${index}`}
          phong={danhSachPhongChoThueTheoViTriSlice[index]}
        />
      );
    });
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY_GOOGLE }}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      onChange={(e) => {
        setCoordinates({ lat: e.center.lat, lng: e.center.lng });
      }}
    >
      {renderPlaces()}
    </GoogleMapReact>
  );
}

export default RoomMap;
