import React from 'react';
import moment from 'moment';
import { ProfileTicketCSS } from './ProfileTicket.styles';
import { capitalize, renderUtilityIcon } from '@Utils/Common';
import _ from 'lodash';

function ProfileTicket({ danhSachVeTheoNguoiDung, handleOk }) {
  const {
    Container,
    TicketContent,
    TicketItem,
    TicketContentLeft,
    TicketContentRight,
    TicketImageRoom,
    TicketDateBook,
    TicketNameRoom,
    TicketService,
  } = ProfileTicketCSS;

  const formatDay = 'DD/MM/YYYY';

  const renderService = (chiTietPhong) => {
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
        <span key={`${key}-${index}`}>
          <span>{capitalize(key)}:</span>
          <span>{renderUtilityIcon(key)}</span>
        </span>
      );
    });
  };

  const renderTicketInfo = () => {
    return danhSachVeTheoNguoiDung.map((item, index) => {
      const { checkIn, checkOut, roomId,_id } = item;
      const { image, description, name } = roomId;
      return (
        <TicketItem key={`${_id}-${index}`}>
          <TicketContentLeft>
            <TicketImageRoom src={image} alt={image} />
            <TicketDateBook>
              {moment(checkIn).format(formatDay)} - {moment(checkOut).format(formatDay)}
            </TicketDateBook>
          </TicketContentLeft>
          <TicketContentRight>
            <TicketNameRoom>{name}</TicketNameRoom>
            <p className='leading-relaxed'>{description}</p>

            <TicketService>{renderService(roomId)}</TicketService>
          </TicketContentRight>
        </TicketItem>
      );
    });
  };

  return (
    <Container>
      <TicketContent>{renderTicketInfo()}</TicketContent>
    </Container>
  );
}

export default ProfileTicket;
