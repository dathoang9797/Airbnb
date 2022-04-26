import React from 'react';
import { SpinnerDotCSS } from './SpinnerDot.styles';

function SpinnerDot() {
  const { SpinnerDotContainer, SpinnerDotFirstDot, SpinnerDotSecondDot, SpinnerDotThirdDot } =
    SpinnerDotCSS;
  return (
    <SpinnerDotContainer>
      <SpinnerDotFirstDot />
      <SpinnerDotSecondDot />
      <SpinnerDotThirdDot />
    </SpinnerDotContainer>
  );
}

export default SpinnerDot;
