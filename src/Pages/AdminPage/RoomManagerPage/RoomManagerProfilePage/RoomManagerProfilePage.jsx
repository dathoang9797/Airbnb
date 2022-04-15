import React from 'react';
import { RoomManagerProfileCSS } from './RoomManagerProfilePage.styles';
import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { BiDumbbell } from 'react-icons/bi';
import { FaHotTub } from 'react-icons/fa';
import { MdOutlineKitchen, MdOutlineDry, MdPool, MdCable } from 'react-icons/md';
import { GiHeatHaze, GiCampfire, GiWifiRouter, GiElevator } from 'react-icons/gi';
import { capitalize } from '@Utils/Common';

function RoomManagerProfileItemService(props) {
  const { Icon, Content, Value } = props;
  return (
    <div>
      <span>
        <span>{capitalize(Content)}:</span>
        {Value ? <span>{Value}</span> : <Icon />}
      </span>
    </div>
  );
}

function RoomManagerProfilePage() {
  const { selectChiTietPhongChoThue } = quanLyPhongChoThueSelector;
  const chiTietPhong = useSelector(selectChiTietPhongChoThue, _.isEqual);
  const isHasChiTietPhong = _.isEmpty(chiTietPhong);
  const urlRoomManager = process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER;
  const { description, image, locationId, name, price } = chiTietPhong;
  const {
    ContainerCSS,
    ContentCSS,
    ImageCSS,
    DescCSS,
    ProfileCSS,
    RateCSS,
    ServiceCSS,
    SocialCSS,
    TitleCSS,
    FacebookIconCSS,
    TwitterIconCSS,
    MessageIconCSS,
  } = RoomManagerProfileCSS;

  const renderService = () => {
    return Object.keys(chiTietPhong).map((key, index) => {
      if (!chiTietPhong[key]) return null;
      switch (key) {
        case 'bath': {
          return (
            <RoomManagerProfileItemService
              key={`${key}-${index}`}
              Content={key}
              Value={chiTietPhong[key]}
            />
          );
        }
        case 'bedRoom': {
          return (
            <RoomManagerProfileItemService
              key={`${key}-${index}`}
              Content={key}
              Value={chiTietPhong[key]}
            />
          );
        }

        case 'guests': {
          return (
            <RoomManagerProfileItemService
              key={`${key}-${index}`}
              Content={key}
              Value={chiTietPhong[key]}
            />
          );
        }

        case 'gym': {
          return (
            <RoomManagerProfileItemService
              key={`${key}-${index}`}
              Content={key}
              Icon={BiDumbbell}
            />
          );
        }

        case 'wifi': {
          return (
            <RoomManagerProfileItemService
              key={`${key}-${index}`}
              Content={key}
              Icon={GiWifiRouter}
            />
          );
        }

        case 'hotTub': {
          return (
            <RoomManagerProfileItemService key={`${key}-${index}`} Content={key} Icon={FaHotTub} />
          );
        }

        case 'kitchen': {
          return (
            <RoomManagerProfileItemService
              key={`${key}-${index}`}
              Content={key}
              Icon={MdOutlineKitchen}
            />
          );
        }

        case 'dryer': {
          return (
            <RoomManagerProfileItemService
              key={`${key}-${index}`}
              Content={key}
              Icon={MdOutlineDry}
            />
          );
        }

        case 'heating': {
          return (
            <RoomManagerProfileItemService
              key={`${key}-${index}`}
              Content={key}
              Icon={GiHeatHaze}
            />
          );
        }

        case 'pool': {
          return (
            <RoomManagerProfileItemService key={`${key}-${index}`} Content={key} Icon={MdPool} />
          );
        }

        case 'indoorFireplace': {
          return (
            <RoomManagerProfileItemService
              key={`${key}-${index}`}
              Content={key}
              Icon={GiCampfire}
            />
          );
        }

        case 'elevator': {
          return (
            <RoomManagerProfileItemService
              key={`${key}-${index}`}
              Content={key}
              Icon={GiElevator}
            />
          );
        }

        case 'cableTV': {
          return (
            <RoomManagerProfileItemService key={`${key}-${index}`} Content={key} Icon={MdCable} />
          );
        }
        default:
          return null;
      }
    });
  };

  return isHasChiTietPhong ? (
    <Redirect to={urlRoomManager} />
  ) : (
    <ContainerCSS>
      <ContentCSS>
        <ImageCSS alt={image} src={image} />
        <ProfileCSS>
          <TitleCSS>{name}</TitleCSS>
          <SocialCSS>
            <span>
              <RateCSS defaultValue={4}>
                <span>4 Reviews</span>
              </RateCSS>
            </span>
            <span>
              <a href='@a'>
                <FacebookIconCSS />
              </a>
              <a href='@a'>
                <TwitterIconCSS />
              </a>
              <a href='@a'>
                <MessageIconCSS />
              </a>
            </span>
          </SocialCSS>
          <DescCSS>{description}</DescCSS>
          <ServiceCSS>
            <div>{renderService()}</div>
            <div>{locationId ? <></> : null}</div>
            <div>
              <span>${price.toLocaleString()}</span>
            </div>
          </ServiceCSS>
        </ProfileCSS>
      </ContentCSS>
    </ContainerCSS>
  );
}

export default RoomManagerProfilePage;
