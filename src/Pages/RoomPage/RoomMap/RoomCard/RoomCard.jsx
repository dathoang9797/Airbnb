import React from 'react';
import { RoomCardCSS } from './RoomCard.styles';

function RoomCard(props) {
  const { phong } = props;
  const { description, image, price, name, locationId, _id } = phong;
  const urlDetailPage = process.env.REACT_APP_LINK_DETAIL;
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
  } = RoomCardCSS;

  const title = (
    <PopoverLink to={`${urlDetailPage}/${_id}`}>
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

export default React.memo(RoomCard);
