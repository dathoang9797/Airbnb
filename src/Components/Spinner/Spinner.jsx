import React, { Fragment } from 'react';
import ReactLoading from 'react-loading';
import { SpinnerCSS } from './Spinner.styles';

const Spinner = () => {
  return (
    <Fragment>
      <Fragment>
        <SpinnerCSS.Container className=''>
          <ReactLoading type={'bubbles'} color={'#fff'} height={150} width={150} />
        </SpinnerCSS.Container>
      </Fragment>
    </Fragment>
  );
};

export default Spinner;
