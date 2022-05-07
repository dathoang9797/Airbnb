import _ from 'lodash';

export const sortValue = (valueA, valueB) => {
  switch (true) {
    case typeof valueA === 'string' && typeof valueB === 'string': {
      if (valueA.toLowerCase() < valueB.toLowerCase()) {
        return -1;
      }
      if (valueA.toLowerCase() > valueB.toLowerCase()) {
        return 1;
      }
      return 0;
    }

    case valueA.hasOwnProperty('content') &&
      !_.isEmpty(valueA.content) &&
      !_.isEmpty(valueB.content): {
      const contentA = valueA.content.toLowerCase();
      const contentB = valueB.content.toLowerCase();
      if (contentA < contentB) {
        return -1;
      }
      if (contentA > contentB) {
        return 1;
      }
      return 0;
    }

    case valueA.hasOwnProperty('province') &&
      !_.isEmpty(valueA.province) &&
      !_.isEmpty(valueB.province): {
      const provinceA = valueA.province.toLowerCase();
      const provinceB = valueB.province.toLowerCase();
      if (provinceA < provinceB) {
        return -1;
      }
      if (provinceA > provinceB) {
        return 1;
      }
      return 0;
    }

    case valueA.hasOwnProperty('created_at') &&
      !_.isEmpty(valueA.created_at) &&
      !_.isEmpty(valueB.created_at): {
      const created_atA = valueA.created_at.toLowerCase();
      const created_atB = valueB.created_at.toLowerCase();
      if (created_atA < created_atB) {
        return -1;
      }
      if (created_atA > created_atB) {
        return 1;
      }
      return 0;
    }

    case valueA.hasOwnProperty('updatedAt') &&
      !_.isEmpty(valueA.updatedAt) &&
      !_.isEmpty(valueB.updatedAt): {
      const updatedAtA = valueA.updatedAt.toLowerCase();
      const updatedAtB = valueB.updatedAt.toLowerCase();
      if (updatedAtA < updatedAtB) {
        return -1;
      }
      if (updatedAtA > updatedAtB) {
        return 1;
      }
      return 0;
    }

    case valueA.hasOwnProperty('name') && !_.isEmpty(valueA.name) && !_.isEmpty(valueB.name): {
      const nameA = valueA.name.toLowerCase();
      const nameB = valueB.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }

    case valueA.hasOwnProperty('email') && !_.isEmpty(valueA.email) && !_.isEmpty(valueB.email): {
      const emailA = valueA.email.toLowerCase();
      const emailB = valueB.email.toLowerCase();
      if (emailA < emailB) {
        return -1;
      }
      if (emailA > emailB) {
        return 1;
      }
      return 0;
    }

    case valueA.hasOwnProperty('type') && !_.isEmpty(valueA.type) && !_.isEmpty(valueB.type): {
      const typeA = valueA.type.toLowerCase();
      const typeB = valueB.type.toLowerCase();
      if (typeA < typeB) {
        return -1;
      }
      if (typeA > typeB) {
        return 1;
      }
      return 0;
    }

    case valueA.hasOwnProperty('country') &&
      !_.isEmpty(valueA.country) &&
      !_.isEmpty(valueB.country): {
      const countryA = valueA.country.toLowerCase();
      const countryB = valueB.country.toLowerCase();
      if (countryA < countryB) {
        return -1;
      }
      if (countryA > countryB) {
        return 1;
      }
      return 0;
    }

    case valueA.hasOwnProperty('locationId') &&
      !_.isEmpty(valueA.locationId) &&
      !_.isEmpty(valueB.locationId): {
      const locationIdNameA = valueA.locationId.name.toLowerCase();
      const locationIdNameB = valueB.locationId.name.toLowerCase();
      if (locationIdNameA < locationIdNameB) {
        return -1;
      }
      if (locationIdNameA > locationIdNameB) {
        return 1;
      }
      return 0;
    }

    case valueA.hasOwnProperty('userId') &&
      !_.isEmpty(valueA.userId) &&
      !_.isEmpty(valueB.userId): {
      const userIdNameA = valueA.userId.name.toLowerCase();
      const userIdNameB = valueB.userId.name.toLowerCase();
      if (userIdNameA < userIdNameB) {
        return -1;
      }
      if (userIdNameA > userIdNameB) {
        return 1;
      }
      return 0;
    }
    case valueA.hasOwnProperty('userId') &&
      !_.isEmpty(valueA.userId.tickets) &&
      !_.isEmpty(valueB.userId.tickets): {
      const ticketsA = valueA.userId.tickets.length;
      const ticketsB = valueB.userId.tickets.length;
      return ticketsA - ticketsB;
    }

    case valueA.hasOwnProperty('roomId') &&
      !_.isEmpty(valueA.roomId) &&
      !_.isEmpty(valueB.roomId): {
      const roomIdNameA = valueA.roomId.name.toLowerCase();
      const roomIdNameB = valueB.roomId.name.toLowerCase();
      if (roomIdNameA < roomIdNameB) {
        return -1;
      }
      if (roomIdNameA > roomIdNameB) {
        return 1;
      }
      return 0;
    }

    case valueA.hasOwnProperty('checkIn') &&
      !_.isEmpty(valueA.checkIn) &&
      !_.isEmpty(valueB.checkIn): {
      const checkInA = valueA.checkIn.toLowerCase();
      const checkInB = valueB.checkIn.toLowerCase();
      if (checkInA < checkInB) {
        return -1;
      }
      if (checkInA > checkInB) {
        return 1;
      }
      return 0;
    }

    case valueA.hasOwnProperty('checkOut') &&
      !_.isEmpty(valueA.checkOut) &&
      !_.isEmpty(valueB.checkOut): {
      const checkOutA = valueA.checkOut.toLowerCase();
      const checkOutB = valueB.checkOut.toLowerCase();
      if (checkOutA < checkOutB) {
        return -1;
      }
      if (checkOutA > checkOutB) {
        return 1;
      }
      return 0;
    }

    default: {
      return null;
    }
  }
};
