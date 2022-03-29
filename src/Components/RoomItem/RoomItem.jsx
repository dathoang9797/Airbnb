import React from 'react';
import { RoomItemStyle } from './RoomItem.styles';

const {
  RoomListImage,
  RoomListItem,
  RoomListContent,
  RoomListTitle,
  RoomListDesc,
  RoomListDetail,
  RoomListPrice,
  RoomListPriceNight,
  RoomListPriceTotal,
  RoomListRating,
} = RoomItemStyle;

function RoomItem() {
  return (
    <RoomListItem>
      <RoomListImage>
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
      </RoomListImage>
      <RoomListContent>
        <RoomListTitle>
          <div>
            <span className='greyText'>Private room in Birkenhead</span>
            <h2>Small Single in Eastham, Wirral Townhouse</h2>
          </div>
          <div>
            <button>
              <img src='./icons/heart.svg' alt='Heart' />
            </button>
          </div>
        </RoomListTitle>
        <div className='separator' />
        <RoomListDesc>
          <span className='greyText'>2 Guest · 1 bedroom</span>
          <span className='greyText'>Kitchen · Wifi · Heating</span>
        </RoomListDesc>
        <RoomListDetail>
          <RoomListRating>
            <img src='./icons/star.svg' alt='Star' />
            <span>
              5 <span>(14)</span>
            </span>
          </RoomListRating>
          <RoomListPrice>
            <RoomListPriceNight>
              £29 <span> / night</span>
            </RoomListPriceNight>
            <RoomListPriceTotal>
              <span>£57 total</span>
            </RoomListPriceTotal>
          </RoomListPrice>
        </RoomListDetail>
      </RoomListContent>
    </RoomListItem>
  );
}

export default RoomItem;
