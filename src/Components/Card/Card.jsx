import React from 'react';
import { CardCSS } from './Card.styles';

function Card(props) {
  const { phong } = props;
  return (
    <CardCSS.CardContainer>
      <CardCSS.CardButton>
        <CardCSS.CardContent>
          <div>
            <div>
              <span>${phong.price.toLocaleString()}</span>
            </div>
          </div>
        </CardCSS.CardContent>
      </CardCSS.CardButton>
    </CardCSS.CardContainer>
  );
}

export default Card;
