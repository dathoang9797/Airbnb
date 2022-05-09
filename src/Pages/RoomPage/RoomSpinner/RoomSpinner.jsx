import React from 'react';
import { RoomSpinnerCSS } from './RoomSpinner.styles';

function RoomSpinner() {
  const { Container, FirstDot, SecondDot, ThirdDot } = RoomSpinnerCSS;
  return (
    <Container>
      <FirstDot />
      <SecondDot />
      <ThirdDot />
    </Container>
  );
}

export default RoomSpinner;
