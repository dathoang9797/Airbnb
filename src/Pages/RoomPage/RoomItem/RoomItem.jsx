import React from 'react';
import { RoomItemCSS } from './RoomItem.styles';
import { images } from '@Assets/Images';

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

  const { chevronLeft, chevronRight, heart, star } = images;

  return (
    <RoomItemCSS.Container>
      <RoomItemCSS.Image>
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
      </RoomItemCSS.Image>
      <RoomItemCSS.Content>
        <RoomItemCSS.Title>
          <div>
            <span className='greyText'>{name}</span>
            <h2>{description}</h2>
          </div>
          <div>
            <button>
              <img src={heart} alt='Heart' />
            </button>
          </div>
        </RoomItemCSS.Title>
        <div className='separator' />
        <RoomItemCSS.Desc>
          <span className='greyText'>
            {guests} Guest {bedRoom} bedroom {bath ? `${bath} bath` : ''}
          </span>
          <span className='greyText'>
            {kitchen ? 'Kitchen .' : ''} {wifi ? 'Wifi .' : ''} {gym ? 'Gym .' : ''}
            {hotTub ? 'HotTub .' : ''} {elevator ? 'Elevator .' : ''} {pool ? 'Pool .' : ''}
            {indoorFireplace ? 'Indoor Fireplace .' : ''} {dryer ? 'Dryer .' : ''}
            {heating ? 'Heating .' : ''} {cableTV ? 'CableTV' : ''}
          </span>
        </RoomItemCSS.Desc>
        <RoomItemCSS.Detail>
          <RoomItemCSS.Rating>
            <img src={star} alt='Star' />
            <span>
              5 <span>(14)</span>
            </span>
          </RoomItemCSS.Rating>
          <RoomItemCSS.Price>
            <RoomItemCSS.PriceNight>
              £{price} <span> / night</span>
            </RoomItemCSS.PriceNight>
            <RoomItemCSS.PriceTotal>
              <span>£57 total</span>
            </RoomItemCSS.PriceTotal>
          </RoomItemCSS.Price>
        </RoomItemCSS.Detail>
      </RoomItemCSS.Content>
    </RoomItemCSS.Container>
  );
}

export default RoomItem;
