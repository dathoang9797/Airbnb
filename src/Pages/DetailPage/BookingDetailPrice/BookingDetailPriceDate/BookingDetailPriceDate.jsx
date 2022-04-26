import { quanLyPhongChoThueAction } from '@Redux/Reducers/QuanLyPhongChoThueSlice';
import moment from 'moment';
import React, { useState, useMemo } from 'react';
import { DatePickerModal } from 'react-rainbow-components';
import { useDispatch } from 'react-redux';
import { BookingDetailPriceDateCSS } from './BookingDetailPriceDate.styles';
import BookingDetailPriceDatePopup from './BookingDetailPriceDatePopup';
import { batch } from 'react-redux';

function BookingDetailPriceDate(props) {
  const { Container, Content, Heading, Title, Item, Button, CheckIn, CheckOut } =
    BookingDetailPriceDateCSS;
  const dispatch = useDispatch();
  const { roomId, price } = props;
  const { setBookingRoomAction, setTotalPriceBookingAction } = quanLyPhongChoThueAction;
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [valueDatePicker, setValueDatePicker] = useState(null);
  const minDate = useMemo(() => new Date(), []);
  const maxDate = useMemo(() => new Date(moment().add(6, 'M')), []);
  const addDayStr = 'Thêm Ngày';

  const handlePrice = (checkIn, checkOut) => {
    if (checkIn && checkOut) {
      const day = moment(checkOut).diff(moment(checkIn), 'days');
      console.log({ day });
      return (price * day).toLocaleString();
    }
    return (price * 1).toLocaleString();
  };

  const formatDates = (dates) => {
    const dateFormat = 'DD-MM-YYYY';
    if (dates) {
      const startDay = moment(dates[0]).format(dateFormat);
      console.log({ startDay });
      if (dates.length > 1) {
        const endDay = moment(dates[1]).format(dateFormat);
        return {
          startDay,
          endDay,
        };
      }
      return {
        startDay,
      };
    }
    return '';
  };

  const handleDatePickerChange = async (value) => {
    const { startDay, endDay } = formatDates(value);
    const checkIn = startDay ? moment(startDay, 'DD-MM-YYYY').toISOString() : '';
    const checkOut = endDay ? moment(endDay, 'DD-MM-YYYY').toISOString() : '';
    const params = { roomId, checkIn, checkOut };

    if (startDay && endDay) {
      setStartDate(startDay);
      setEndDate(endDay);
      setValueDatePicker(value);
      setIsOpen(!isOpen);
      const totalPrice = handlePrice(checkIn, checkOut);
      batch(() => {
        dispatch(setBookingRoomAction(params));
        dispatch(setTotalPriceBookingAction(totalPrice));
      });
      return;
    }

    if (startDay) {
      setStartDate(startDay);
      setValueDatePicker(value);
      return;
    }
  };

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <Container>
      <DatePickerModal
        title={
          <Title>
            <Heading>
              <h1>Chọn ngày</h1>
              <div>
                <p>Thêm ngày đi để biết giá chính xác</p>
              </div>
            </Heading>
          </Title>
        }
        isOpen={isOpen}
        value={valueDatePicker}
        variant='double'
        onChange={handleDatePickerChange}
        onRequestClose={() => setIsOpen(false)}
        selectionType='range'
        locale='vi-VN'
        id='datePicker-17_modal'
        minDate={minDate}
        maxDate={maxDate}
      />
      <Content>
        <Item>
          <Button type='button' onClick={handleOpen}>
            <CheckIn>
              <h1>Nhận phòng</h1>
              <span>{startDate ? startDate : addDayStr}</span>
            </CheckIn>
            <CheckOut>
              <h1>Trả phòng</h1>
              <span>{endDate ? endDate : addDayStr}</span>
            </CheckOut>
          </Button>
        </Item>
      </Content>
      <Content>
        <BookingDetailPriceDatePopup />
      </Content>
    </Container>
  );
}

export default BookingDetailPriceDate;
