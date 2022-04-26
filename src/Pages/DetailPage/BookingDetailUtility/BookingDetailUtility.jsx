import React from 'react';
import { BookingDetailUtilityCSS } from './BookingDetailUtility.styles';
import { capitalize, renderUtilityIcon } from '@Utils/Common';

function BookingDetailUtility(propsUtility) {
  const {
    Container,
    Heading,
    IconContent,
    IconContentItem,
    IconContentItemDesc,
    ButtonShowAllUtil,
  } = BookingDetailUtilityCSS;

  const renderUtility = () => {
    return Object.keys(propsUtility).map((key, index) => {
      if (!propsUtility[key]) return null;
      return (
        <IconContentItem key={`${key}-${index}`}>
          <IconContentItemDesc>
            <span>{capitalize(key)}</span>
            <div>{renderUtilityIcon(key)}</div>
          </IconContentItemDesc>
        </IconContentItem>
      );
    });
  };

  return (
    <Container>
      <Heading>
        <h2>Nơi này có những gì cho bạn</h2>
      </Heading>
      <IconContent>{renderUtility()}</IconContent>
      {/* <ButtonShowAllUtil>
        <a href='/rooms/25748356/amenities?federated_search_id=02606a36-1f5b-40a3-b12c-abb057ad9125&source_impression_id=p3_1650333895_uDAmGykuGMEo6hSu&guests=1&adults=1&check_in=2022-05-08&check_out=2022-05-15'>
          Hiển thị tất cả 28 tiện nghi
        </a>
      </ButtonShowAllUtil> */}
    </Container>
  );
}

export default BookingDetailUtility;
