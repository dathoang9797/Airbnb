import React from 'react';
import { SpinnerFallBackCSS } from './SpinnerFallBack.styles';

function SpinnerFallBack() {
  return (
    <SpinnerFallBackCSS.Container>
      <SpinnerFallBackCSS.Ripple>
        <div></div>
        <div></div>
      </SpinnerFallBackCSS.Ripple>
    </SpinnerFallBackCSS.Container>
  );
}

export default React.memo(SpinnerFallBack);
