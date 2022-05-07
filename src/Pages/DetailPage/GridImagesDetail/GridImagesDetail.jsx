import React from 'react';
import { GridImagesDetailCSS } from './GridImagesDetail.styles';
import { BsThreeDots } from 'react-icons/bs';

function GridImagesDetail(props) {
  const { image } = props;
  const imgSrc = !image?.length
    ? 'https://a0.muscache.com/im/pictures/67b6fa80-52e0-4b76-9d56-6f34d9ccec0e.jpg'
    : image;

  const {
    Container,
    Content,
    ImagesContainer,
    ButtonShowImage,
    ImagesContentLeft,
    ImagesContentRight,
    ImagesItemFirst,
    ImagesItemSecond,
    ImagesItemsThird,
    ImagesItemsContent,
    ImagesItemLink,
    ImagesItemLinkContent,
  } = GridImagesDetailCSS;

  return (
    <Container>
      <Content>
        <ImagesContainer>
          <ImagesContentLeft>
            <ImagesItemFirst>
              <ImagesItemsContent>
                <ImagesItemLink href='#@'>
                  <ImagesItemLinkContent>
                    <img src={imgSrc} alt={imgSrc} />
                  </ImagesItemLinkContent>
                </ImagesItemLink>
              </ImagesItemsContent>
            </ImagesItemFirst>
          </ImagesContentLeft>
          <ImagesContentRight>
            <ImagesItemSecond>
              <ImagesItemsContent>
                <ImagesItemLink href='#@'>
                  <ImagesItemLinkContent>
                    <img src={imgSrc} alt={imgSrc} />
                  </ImagesItemLinkContent>
                </ImagesItemLink>
              </ImagesItemsContent>
              <ImagesItemsContent>
                <ImagesItemLink href='#@'>
                  <ImagesItemLinkContent>
                    <img src={imgSrc} alt={imgSrc} />
                  </ImagesItemLinkContent>
                </ImagesItemLink>
              </ImagesItemsContent>
            </ImagesItemSecond>
            <ImagesItemsThird>
              <ImagesItemsContent>
                <ImagesItemLink href='#@'>
                  <ImagesItemLinkContent>
                    <img src={imgSrc} alt={imgSrc} />
                  </ImagesItemLinkContent>
                </ImagesItemLink>
              </ImagesItemsContent>
              <ImagesItemsContent>
                <ImagesItemLink href='#@'>
                  <ImagesItemLinkContent>
                    <img src={imgSrc} alt={imgSrc} />
                  </ImagesItemLinkContent>
                </ImagesItemLink>
              </ImagesItemsContent>
            </ImagesItemsThird>
          </ImagesContentRight>
        </ImagesContainer>
        <ButtonShowImage>
          <a href='#@'>
            <div>
              <BsThreeDots />
              <div>Hiển thị tất cả ảnh</div>
            </div>
          </a>
        </ButtonShowImage>
      </Content>
    </Container>
  );
}

export default React.memo(GridImagesDetail);
