import _ from 'lodash';
import { removeSpace, removeUnicode } from '@Utils/Common';

export const sortValue = (valueA, valueB, type) => {
  switch (true) {
    case (type === 'content' ||
      type === 'province' ||
      type === 'name' ||
      type === 'nameLocation' ||
      type === 'type' ||
      type === 'email' ||
      type === 'roomName' ||
      type === 'locationRoomName' ||
      type === 'userIdName' ||
      type === 'roomIdName') &&
      !_.isEmpty(valueA) &&
      !_.isEmpty(valueB): {
      const valueFormatA = removeSpace(removeUnicode(valueA));
      const valueFormatB = removeSpace(removeUnicode(valueB));
      if (valueFormatA < valueFormatB) {
        return -1;
      }
      if (valueFormatA > valueFormatB) {
        return 1;
      }
      return 0;
    }

    case (type === 'checkOut' ||
      type === 'checkIn' ||
      type === 'created_at' ||
      type === 'updatedAt') &&
      !_.isEmpty(valueA) &&
      !_.isEmpty(valueB): {
      const convertIsoTimeA = new Date(valueA);
      const convertIsoTimeB = new Date(valueB);
      const formatTimeA = convertIsoTimeA.getFullYear();
      const formatTimeB = convertIsoTimeB.getFullYear();
      return formatTimeA - formatTimeB;
    }

    case type === 'userIdTickets' && !_.isEmpty(valueA) && !_.isEmpty(valueB): {
      const ticketsA = valueA.length;
      const ticketsB = valueB.length;
      return ticketsA - ticketsB;
    }

    default: {
      return null;
    }
  }
};
