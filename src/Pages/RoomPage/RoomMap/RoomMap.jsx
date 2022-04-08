import Card from '@Components/Card';
import GoogleMapReact from 'google-map-react';
import React from 'react';

function RoomMap({ coordinates, places, danhSachPhongChoThueTheoViTriSlice, setCoordinates }) {
  const renderPlaces = () => {
    if (places.length !== danhSachPhongChoThueTheoViTriSlice.length) return;
    return places.map((place, index) => {
      if (!place.features.length) return null;
      const center = place.features[0].center;
      return (
        <Card
          lat={center[1]}
          lng={center[0]}
          key={`${place.features[0].id}-${index}`}
          phong={danhSachPhongChoThueTheoViTriSlice[index]}
        />
      );
    });
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY_GOOGLE_MAPS }}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      // options={''}
      onChange={(e) => {
        console.log({ e });
        setCoordinates({ lat: e.center.lat, lng: e.center.lng });
      }}
      onChildClick={(e) => {
        console.log('click');
      }}
    >
      {places ? renderPlaces() : null}
    </GoogleMapReact>
  );
}

export default RoomMap;
