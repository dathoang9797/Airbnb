import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { messageApp, showWarning, parseFloatNumber } from '@Utils/Common';
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
  const { messageWaringBooking } = messageApp;
  const totalPriceBooking = useSelector(selectTotalPriceBooking);
  const pricerService = Math.floor(Math.random() * 10) + 1;

  const handleBookingRoom = () => {
    if (_.isEmpty(bookingRoom)) {
      showWarning(messageWaringBooking);
      return;
    }
    dispatch(datPhongPhongChoThueAsync(bookingRoom));
  };

  const handleRenderPrice = () => {
    if (!price) return 0;
    if (!totalPriceBooking) return (price + pricerService).toLocaleString();
    const totalPrice = parseFloatNumber(totalPriceBooking) + pricerService;
    return totalPrice.toLocaleString();
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
            <span>
              ${totalPriceBooking ? totalPriceBooking?.toLocaleString() : price?.toLocaleString()}
            </span>
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

export default DetailBookingPriceBill;
