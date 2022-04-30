import React from 'react';
import { CardPopupCSS } from './CardPopup.styles';

function CardPopup(props) {
  // console.log({ props });
  const { phong } = props;
  const { description, image, price, name, locationId } = phong;
  const {
    Container,
    Button,
    Content,
    Popover,
    ContentPopover,
    PopoverLink,
    PopoverDesc,
    PopoverTitle,
    PopoverParagraph,
    PopoverPrice,
    PopoverRating,
    Rate,
  } = CardPopupCSS;

  const title = (
    <PopoverLink href='/rooms/574807036190872888?location=Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh&amp;previous_page_section_name=1001&amp;federated_search_id=c3e81b3f-cd1c-4cad-a41e-9b27fb3a8ec8'>
      <img src={image} alt={image} />
    </PopoverLink>
  );

  const Rating = (
    <PopoverRating>
      <Rate allowHalf value={locationId.valueate / 2} disabled />
    </PopoverRating>
  );

  const content = (
    <ContentPopover>
      <PopoverDesc>
        <PopoverTitle>{locationId ? Rating : 'Chưa có đánh giá nào'} </PopoverTitle>
        <PopoverParagraph>{name}</PopoverParagraph>
        <PopoverParagraph>
          {description.length >= 30 ? description.substring(0, 30) + '...' : description}
        </PopoverParagraph>
        <PopoverPrice>
          <span>${price.toLocaleString()}</span>
          <span>&nbsp;/ đêm</span>
        </PopoverPrice>
      </PopoverDesc>
    </ContentPopover>
  );

  return (
    <Popover
      placement='bottom'
      title={title}
      content={content}
      trigger='click'
      overlayClassName='wrap-card-popup'
    >
      <Container>
        <Button>
          <Content>
            <div>
              <div>${price.toLocaleString()}</div>
            </div>
          </Content>
        </Button>
      </Container>
    </Popover>
  );
}

export default React.memo(CardPopup);
