import React from 'react';
import { RoomNotFoundCSS } from './RoomNotFound.styles';
import RoomSpinner from '@Pages/RoomPage/RoomSpinner';

function RoomNotFound({ showSpinnerMap }) {
  const { SmileFace, Container, Title } = RoomNotFoundCSS;
  return showSpinnerMap ? (
    <RoomSpinner />
  ) : (
    <Container>
      <SmileFace />
      <Title>
        <p>Sorry, We couldn't find what you are looking for!</p> 
        <p>PLease move the map to find more</p>
      </Title>
    </Container>
  );
}

export default RoomNotFound;
