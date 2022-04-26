import { render } from 'react-dom';
import ButtonScrollTop from '@Components/ButtonScrollTop';

export const addButtonScrollInDom = () => {
  const antSpinNestedLoadingDom = document.querySelector('.ant-spin-nested-loading');
  const scrollButtonTopDom = document.querySelector('#scroll-button-top');
  if (antSpinNestedLoadingDom && !scrollButtonTopDom) {
    const scrollButtonTopElem = document.createElement('div');
    scrollButtonTopElem.setAttribute('id', 'scroll-button-top');
    antSpinNestedLoadingDom.append(scrollButtonTopElem);
    render(<ButtonScrollTop />, scrollButtonTopElem);
  }
};
