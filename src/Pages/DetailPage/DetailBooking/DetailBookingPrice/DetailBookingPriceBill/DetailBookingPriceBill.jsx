import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { messageApp, showWarning } from '@Utils/Common';
import _ from 'lodash';
import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { DetailBookingPriceBillCSS } from './DetailBookingPriceBill.styles';

function DetailBookingPriceBill(props) {
  const { Container, Bill, BillItemFirst, BillItemSecond, BillTax, Button } =
  DetailBookingPriceBillCSS;
  const dispatch = useDispatch();
  const { price } = props;
  const { selectBookingRoom, selectTotalPriceBooking } = quanLyPhongChoThueSelector;
  const { datPhongPhongChoThueAsync } = quanLyPhongChoThueThunk;
  const bookingRoom = useSelector(selectBookingRoom, shallowEqual);
  const totalPriceBooking = useSelector(selectTotalPriceBooking) || price;
  const { messageWaringBooking } = messageApp;
  const pricerService = Math.floor(Math.random() * 10) + 1;

  const handleBookingRoom = () => {
    if (_.isEmpty(bookingRoom)) {
      showWarning(messageWaringBooking);
      return;
    }
    dispatch(datPhongPhongChoThueAsync(bookingRoom));
  };

  const handleRenderPrice = () => {
    if (totalPriceBooking) {
      if (typeof totalPriceBooking === 'string') {
        return (Number(totalPriceBooking.replace(/,/g, '')) + pricerService).toLocaleString();
      }
      return totalPriceBooking.toLocaleString();
    }
    return 0;
  };

  return (
    <Container>
      <Button onClick={handleBookingRoom}>Đặt phòng</Button>
      <ul>
        <li>Bạn vẫn chưa bị trừ tiền</li>
      </ul>
      <Bill>
        <BillItemFirst>
          <div>
            <span>
              <div>
                <button type='button'>
                  <p>${price} x 1&nbsp;đêm&nbsp;</p>
                </button>
              </div>
            </span>
            <span>${totalPriceBooking}</span>
          </div>
          <div>
            <span>
              <div>
                <button type='button'>
                  <p>Phí dịch vụ</p>
                </button>
              </div>
            </span>
            <span>${pricerService}</span>
          </div>
        </BillItemFirst>
        <BillItemSecond>
          <BillTax>
            <p>Tổng trước thuế</p>
            <p>${handleRenderPrice()}</p>
          </BillTax>
        </BillItemSecond>
      </Bill>
    </Container>
  );
}

export default React.memo(DetailBookingPriceBill);
