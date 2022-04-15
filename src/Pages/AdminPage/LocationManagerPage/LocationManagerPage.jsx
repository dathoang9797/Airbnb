import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import _ from 'lodash';
import { render } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import ButtonScrollTop from '@Components/ButtonScrollTop';

function LocationManagerPage() {
  useLayoutEffect(() => {
    const antSpinNestedLoadingDom = document.querySelector('.ant-spin-nested-loading');
    const scrollButtonTopDom = document.querySelector('#scroll-button-top');
    if (antSpinNestedLoadingDom && !scrollButtonTopDom) {
      const scrollButtonTopElem = document.createElement('div');
      scrollButtonTopElem.setAttribute('id', 'scroll-button-top');
      antSpinNestedLoadingDom.append(scrollButtonTopElem);
      render(<ButtonScrollTop />, scrollButtonTopElem);
    }
  });
  return <div>LocationManagerPage</div>;
}

export default LocationManagerPage;
