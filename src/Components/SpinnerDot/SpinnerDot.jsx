import React from 'react';
import { SpinnerDotCSS } from './SpinnerDot.styles';

function SpinnerDot() {
  const { Container, FirstDot, SecondDot, ThirdDot } = SpinnerDotCSS;
  return (
    <Container id='spinner-dot'>
      <FirstDot />
      <SecondDot />
      <ThirdDot />
    </Container>
  );
}

export default SpinnerDot;
