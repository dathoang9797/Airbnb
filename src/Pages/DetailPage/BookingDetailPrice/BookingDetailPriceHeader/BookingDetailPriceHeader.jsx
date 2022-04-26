import React from 'react';
import { BookingDetailPricerHeaderCSS } from './BookingDetailPriceHeader.styles';

function BookingDetailPriceHeader(props) {
  const { Container, PricingContainer, PricingContent, PricingEvaluate } =
    BookingDetailPricerHeaderCSS;
  const { price } = props;

  return (
    <Container>
      <PricingContainer>
        <PricingContent>
          <span>
            <span>${price - 1000}</span>&nbsp;
          </span>
          <span> ${price}</span>
          <span>&nbsp;/ đêm</span>
        </PricingContent>
        <span>$19/đêm, giá gốc $25</span>
      </PricingContainer>
      <PricingEvaluate>
        <div>
          <span>
            <svg
              viewBox='0 0 32 32'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              role='presentation'
              focusable='false'
            >
              <path
                d='M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z'
                fillRule='evenodd'
              />
            </svg>
          </span>
          <span aria-hidden='true'>4,73 ·</span>
          <a
            aria-label='Xếp hạng 4,73/5 theo 260 đánh giá.'
            href='/rooms/24131623/reviews?federated_search_id=8fc37510-e136-4c37-a395-29adba33bf5e&source_impression_id=p3_1650440387_G7aPL%2FdGamqF2hsP&check_in=2022-05-13&guests=1&adults=1&check_out=2022-05-15'
          >
            <span>260 đánh giá</span>
          </a>
        </div>
      </PricingEvaluate>
    </Container>
  );
}

export default BookingDetailPriceHeader;
