import { loadingSelector } from '@/Redux/Selector/LoadingSelect';
import React, { useLayoutEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { SpinnerCSS } from './Spinner.styles';

const Spinner = () => {
  const { selectIsLoadingState } = loadingSelector;
  const isLoading = useSelector(selectIsLoadingState);
  const spinRef = useRef(null);
  const idTimeOut = useRef(null);

  useLayoutEffect(() => {
    if (spinRef.current.classList.contains('animate__fadeOut')) {
      idTimeOut.current = setTimeout(() => {
        spinRef.current.style.zIndex = 0;
        spinRef.current.style.display = 'none';
      }, 1000);
    } else {
      spinRef.current.style.zIndex = 99999;
      spinRef.current.style.display = 'block';
      clearTimeout(idTimeOut.current);
    }
  });

  return isLoading ? (
    <SpinnerCSS.Container ref={spinRef}>
      <SpinnerCSS.Ripple>
        <div></div>
        <div></div>
      </SpinnerCSS.Ripple>
    </SpinnerCSS.Container>
  ) : (
    <SpinnerCSS.Container ref={spinRef} className='animate__animated animate__fadeOut'>
      <SpinnerCSS.Ripple>
        <div></div>
        <div></div>
      </SpinnerCSS.Ripple>
    </SpinnerCSS.Container>
  );
};

export default React.memo(Spinner);
