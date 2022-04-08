import React from 'react';
import { RoomItemStyle } from './RoomItem.styles';
import { images } from '@Assets/Images';

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
const { chevronLeft, chevronRight, heart, star } = images;

function RoomItem({ phong }) {
  const {
    name,
    guests,
    bedRoom,
    bath,
    description,
    price,
    elevator,
    hotTub,
    pool,
    indoorFireplace,
    dryer,
    gym,
    kitchen,
    wifi,
    heating,
    cableTV,
    image,
  } = phong;
  return (
    <RoomListItem>
      <RoomListImage>
        <button>
          <img src={chevronLeft} alt='Chevron Left' />
        </button>
        <button>
          <img src={chevronRight} alt='Chevron Right' />
        </button>
        <img
          src={image ?? `https://picsum.photos/id/300/200`}
          alt={image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = `https://picsum.photos/id/300/200`;
          }}
        />
      </RoomListImage>
      <RoomListContent>
        <RoomListTitle>
          <div>
            <span className='greyText'>{name}</span>
            <h2>{description}</h2>
          </div>
          <div>
            <button>
              <img src={heart} alt='Heart' />
            </button>
          </div>
        </RoomListTitle>
        <div className='separator' />
        <RoomListDesc>
          <span className='greyText'>
            {guests} Guest {bedRoom} bedroom {bath ? `${bath} bath` : ''}
          </span>
          <span className='greyText'>
            {kitchen ? 'Kitchen .' : ''} {wifi ? 'Wifi .' : ''} {gym ? 'Gym .' : ''}
            {hotTub ? 'HotTub .' : ''} {elevator ? 'Elevator .' : ''} {pool ? 'Pool .' : ''}
            {indoorFireplace ? 'Indoor Fireplace .' : ''} {dryer ? 'Dryer .' : ''}
            {heating ? 'Heating .' : ''} {cableTV ? 'CableTV' : ''}
          </span>
        </RoomListDesc>
        <RoomListDetail>
          <RoomListRating>
            <img src={star} alt='Star' />
            <span>
              5 <span>(14)</span>
            </span>
          </RoomListRating>
          <RoomListPrice>
            <RoomListPriceNight>
              £{price} <span> / night</span>
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
