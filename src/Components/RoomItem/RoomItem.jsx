import React from 'react';
import { RoomItemCSS } from './RoomItem.styles';

function RoomItem() {
  return (
    <RoomItemCSS.Item>
      <RoomItemCSS.Image>
        <button>
          <img src='./icons/chevronLeft.svg' alt='Chevron Left' />
        </button>
        <button>
          <img src='./icons/chevronRight.svg' alt='Chevron Right' />
        </button>
        <img
          src='https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2635&q=80'
          alt=''
        ></img>
      </RoomItemCSS.Image>
      <RoomItemCSS.Content>
        <RoomItemCSS.Title>
          <div>
            <span className='greyText'>Private room in Birkenhead</span>
            <h2>Small Single in Eastham, Wirral Townhouse</h2>
          </div>
          <div>
            <button>
              <img src='./icons/heart.svg' alt='Heart' />
            </button>
          </div>
        </RoomItemCSS.Title>
        <div className='separator' />
        <RoomItemCSS.Desc>
          <span className='greyText'>2 Guest · 1 bedroom</span>
          <span className='greyText'>Kitchen · Wifi · Heating</span>
        </RoomItemCSS.Desc>
        <RoomItemCSS.Detail>
          <RoomItemCSS.Rating>
            <img src='./icons/star.svg' alt='Star' />
            <span>
              5 <span>(14)</span>
            </span>
          </RoomItemCSS.Rating>
          <RoomItemCSS.Price>
            <RoomItemCSS.PriceNight>
              £29 <span> / night</span>
            </RoomItemCSS.PriceNight>
            <RoomItemCSS.PriceTotal>
              <span>£57 total</span>
            </RoomItemCSS.PriceTotal>
          </RoomItemCSS.Price>
        </RoomItemCSS.Detail>
      </RoomItemCSS.Content>
    </RoomItemCSS.Item>
  );
}

export default RoomItem;
