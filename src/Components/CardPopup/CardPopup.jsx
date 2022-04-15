import React from 'react';
import { CardPopupCSS } from './CardPopup.styles';

function CardPopup(props) {
  const { phong } = props;
  return (
    <CardPopupCSS.Container>
      <CardPopupCSS.Button>
        <CardPopupCSS.Content>
          <div>
            <div>{/* <span>${phong.price.toLocaleString()}</span> */}</div>
          </div>
        </CardPopupCSS.Content>
      </CardPopupCSS.Button>
    </CardPopupCSS.Container>
  );
}

export default CardPopup;
