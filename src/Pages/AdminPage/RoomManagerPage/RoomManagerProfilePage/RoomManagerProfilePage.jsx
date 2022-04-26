import React from 'react';
import { RoomManagerProfileCSS } from './RoomManagerProfilePage.styles';
import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { capitalize, renderUtilityIcon } from '@Utils/Common';

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
    const utility = _.omit(chiTietPhong, [
      '__v',
      '_id',
      'description',
      'image',
      'locationId',
      'guests',
      'bedRoom',
      'bath',
      'name',
      'price',
    ]);
    return Object.keys(utility).map((key, index) => {
      if (!chiTietPhong[key]) return null;
      return (
        <div key={`${key}-${index}`}>
          <span>
            <span>{capitalize(key)}:</span>
            <span>{renderUtilityIcon(key)}</span>
          </span>
        </div>
      );
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
