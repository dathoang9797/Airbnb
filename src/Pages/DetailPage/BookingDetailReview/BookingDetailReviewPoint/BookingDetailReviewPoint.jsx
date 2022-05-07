import React from 'react';
import { BookingDetailReviewPointCSS } from './BookingDetailReviewPoint.styles';

function BookingDetailReviewPoint() {
  const {
    Container,
    Content,
    Item,
    ItemContent,
    ItemProcess,
    ItemProcessContent,
    ItemProcessScore,
  } = BookingDetailReviewPointCSS;
  
  return (
    <Container>
      <Content>
        <Item>
          <ItemContent>
            <h1>Mức độ sạch sẽ</h1>
            <ItemProcessContent>
              <ItemProcess aria-label='4,7/5.0' role='img'>
                <span></span>
              </ItemProcess>
              <ItemProcessScore aria-hidden='true'>4,7</ItemProcessScore>
            </ItemProcessContent>
          </ItemContent>
        </Item>
        <Item>
          <ItemContent>
            <h1>Liên lạc</h1>
            <ItemProcessContent>
              <ItemProcess aria-label='4,7/5.0' role='img'>
                <span></span>
              </ItemProcess>
              <ItemProcessScore aria-hidden='true'>4,7</ItemProcessScore>
            </ItemProcessContent>
          </ItemContent>
        </Item>
        <Item>
          <ItemContent>
            <h1>Nhận phòng</h1>
            <ItemProcessContent>
              <ItemProcess aria-label='4,7/5.0' role='img'>
                <span></span>
              </ItemProcess>
              <ItemProcessScore aria-hidden='true'>4,7</ItemProcessScore>
            </ItemProcessContent>
          </ItemContent>
        </Item>
        <Item>
          <ItemContent>
            <h1>Độ chính xác</h1>
            <ItemProcessContent>
              <ItemProcess aria-label='4,7/5.0' role='img'>
                <span></span>
              </ItemProcess>
              <ItemProcessScore aria-hidden='true'>4,7</ItemProcessScore>
            </ItemProcessContent>
          </ItemContent>
        </Item>
        <Item>
          <ItemContent>
            <h1>Vị trí</h1>
            <ItemProcessContent>
              <ItemProcess aria-label='4,7/5.0' role='img'>
                <span></span>
              </ItemProcess>
              <ItemProcessScore aria-hidden='true'>4,7</ItemProcessScore>
            </ItemProcessContent>
          </ItemContent>
        </Item>
        <Item>
          <ItemContent>
            <h1>Giá trị</h1>
            <ItemProcessContent>
              <ItemProcess aria-label='4,7/5.0' role='img'>
                <span></span>
              </ItemProcess>
              <ItemProcessScore aria-hidden='true'>4,7</ItemProcessScore>
            </ItemProcessContent>
          </ItemContent>
        </Item>
      </Content>
    </Container>
  );
}

export default React.memo(BookingDetailReviewPoint);
