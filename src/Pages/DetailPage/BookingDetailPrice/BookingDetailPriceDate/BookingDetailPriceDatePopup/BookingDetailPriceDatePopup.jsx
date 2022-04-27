import { BookingDetailPriceDatePopupCSS } from './BookingDetailPriceDatePopup.styles';
import React, { useState } from 'react';

function BookingDetailPriceDatePopup() {
  const {
    Container,
    ItemGuest,
    Item,
    ItemLabel,
    Popup,
    PopupClose,
    PopupCountUser,
    PopupCountUserChangeValue,
    PopupCountUserDesc,
  } = BookingDetailPriceDatePopupCSS;

  const [numberUser, setNumberUser] = useState(0);

  const handleIncreaseUser = (e) => setNumberUser(numberUser + 1);

  const handleDecreaseUser = (e) => setNumberUser(numberUser - 1);

  const [open, setOpen] = useState([0]);

  const handleCloseOpen = () => {
    setOpen([0]);
  };

  return (
    <Container
      expandIconPosition='right'
      activeKey={open}
      onChange={() => {
        setOpen([open[0] ? 0 : 1]);
      }}
    >
      <Popup
        key='1'
        header={
          <Item>
            <ItemLabel>
              <span>Khách</span>
              <ItemGuest>
                <span>{numberUser} khách</span>
              </ItemGuest>
            </ItemLabel>
          </Item>
        }
      >
        <PopupCountUser>
          <PopupCountUserDesc>
            <h1>Khách</h1>
          </PopupCountUserDesc>
          <PopupCountUserChangeValue>
            <button
              type='button'
              disabled={numberUser <= 0 ? true : false}
              onClick={handleDecreaseUser}
            >
              <span>
                <svg
                  viewBox='0 0 32 32'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  role='presentation'
                  focusable='false'
                >
                  <path d='m2 16h28' />
                </svg>
              </span>
            </button>
            <div>
              <span>{numberUser}</span>
            </div>
            <button type='button' aria-label='thêm' onClick={handleIncreaseUser}>
              <span>
                <svg
                  viewBox='0 0 32 32'
                  xmlns='http://www.w3.org/2000/svg'
                  role='presentation'
                  focusable='false'
                >
                  <path d='m2 16h28m-14-14v28' />
                </svg>
              </span>
            </button>
          </PopupCountUserChangeValue>
        </PopupCountUser>
        <PopupClose>
          <button type='button' onClick={handleCloseOpen}>
            Đóng
          </button>
        </PopupClose>
      </Popup>
    </Container>
  );
}

export default BookingDetailPriceDatePopup;
