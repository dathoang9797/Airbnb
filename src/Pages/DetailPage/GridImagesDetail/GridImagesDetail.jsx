import React from 'react';
import { GridImagesDetailCSS } from './GridImagesDetail.styles';

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
    ImagesContent,
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
          <ImagesContent>
            <ImagesItemFirst>
              <ImagesItemsContent>
                <ImagesItemLink
                  aria-label='Hình ảnh nhà/phòng cho thuê 1, Xem tất cả ảnh'
                  href='#@'
                >
                  <ImagesItemLinkContent>
                    <picture>
                      <source srcSet={`${imgSrc}?im_w=960 1x`} media='(max-width: 743px)' />
                      <source
                        srcSet={`${imgSrc}?im_w=960 1x`}
                        media='(min-width: 743.1px) and (max-width: 1127px)'
                      />
                      <source
                        srcSet={`${imgSrc}?im_w=960 1x`}
                        media='(min-width: 1127.1px) and (max-width: 1439px)'
                      />
                      <source srcSet={`${imgSrc}?im_w=1200 1x`} media='(min-width: 1439.1px)' />
                      <img
                        aria-hidden='true'
                        alt=''
                        elementtiming='LCP-target'
                        fetchpriority='high'
                        id='FMP-target'
                        src={`${imgSrc}?im_w=720'`}
                        data-original-uri={`${imgSrc}`}
                      />
                    </picture>
                    <div
                      style={{
                        backgroundImage: `url("${imgSrc}?im_w=720")`,
                      }}
                    />
                  </ImagesItemLinkContent>
                </ImagesItemLink>
              </ImagesItemsContent>
            </ImagesItemFirst>
            <ImagesItemSecond>
              <ImagesItemsContent>
                <ImagesItemLink
                  aria-label='Hình ảnh nhà/phòng cho thuê 2, Xem tất cả ảnh'
                  href='#@'
                >
                  <ImagesItemLinkContent>
                    <picture>
                      <source srcSet={`${imgSrc}?im_w=960 1x`} media='(max-width: 743px)' />
                      <source
                        srcSet={`${imgSrc}?im_w=960 1x`}
                        media='(min-width: 743.1px) and (max-width: 1127px)'
                      />
                      <source
                        srcSet={`${imgSrc}?im_w=960 1x`}
                        media='(min-width: 1127.1px) and (max-width: 1439px)'
                      />
                      <source srcSet={`${imgSrc}?im_w=1200 1x`} media='(min-width: 1439.1px)' />
                      <img
                        aria-hidden='true'
                        alt=''
                        elementtiming='LCP-target'
                        fetchpriority='high'
                        id='FMP-target'
                        src={`${imgSrc}?im_w=720'`}
                        data-original-uri={`${imgSrc}`}
                      />
                    </picture>
                    <div
                      style={{
                        backgroundImage: `url("${imgSrc}?im_w=720")`,
                      }}
                    />
                  </ImagesItemLinkContent>
                </ImagesItemLink>
              </ImagesItemsContent>
              <ImagesItemsContent>
                <ImagesItemLink
                  aria-label='Hình ảnh nhà/phòng cho thuê 3, Xem tất cả ảnh'
                  href='#@'
                >
                  <ImagesItemLinkContent>
                    <picture>
                      <source srcSet={`${imgSrc}?im_w=960 1x`} media='(max-width: 743px)' />
                      <source
                        srcSet={`${imgSrc}?im_w=960 1x`}
                        media='(min-width: 743.1px) and (max-width: 1127px)'
                      />
                      <source
                        srcSet={`${imgSrc}?im_w=960 1x`}
                        media='(min-width: 1127.1px) and (max-width: 1439px)'
                      />
                      <source srcSet={`${imgSrc}?im_w=1200 1x`} media='(min-width: 1439.1px)' />
                      <img
                        aria-hidden='true'
                        alt=''
                        elementtiming='LCP-target'
                        fetchpriority='high'
                        id='FMP-target'
                        src={`${imgSrc}?im_w=720'`}
                        data-original-uri={`${imgSrc}`}
                      />
                    </picture>
                    <div
                      style={{
                        backgroundImage: `url("${imgSrc}?im_w=720")`,
                      }}
                    />
                  </ImagesItemLinkContent>
                </ImagesItemLink>
              </ImagesItemsContent>
            </ImagesItemSecond>
            <ImagesItemsThird>
              <ImagesItemsContent>
                <ImagesItemLink
                  aria-label='Hình ảnh nhà/phòng cho thuê 2, Xem tất cả ảnh'
                  href='#@'
                >
                  <ImagesItemLinkContent>
                    <picture>
                      <source srcSet={`${imgSrc}?im_w=960 1x`} media='(max-width: 743px)' />
                      <source
                        srcSet={`${imgSrc}?im_w=960 1x`}
                        media='(min-width: 743.1px) and (max-width: 1127px)'
                      />
                      <source
                        srcSet={`${imgSrc}?im_w=960 1x`}
                        media='(min-width: 1127.1px) and (max-width: 1439px)'
                      />
                      <source srcSet={`${imgSrc}?im_w=1200 1x`} media='(min-width: 1439.1px)' />
                      <img
                        aria-hidden='true'
                        alt=''
                        elementtiming='LCP-target'
                        fetchpriority='high'
                        id='FMP-target'
                        src={`${imgSrc}?im_w=720'`}
                        data-original-uri={`${imgSrc}`}
                      />
                    </picture>
                    <div
                      style={{
                        backgroundImage: `url("${imgSrc}?im_w=720")`,
                      }}
                    />
                  </ImagesItemLinkContent>
                </ImagesItemLink>
              </ImagesItemsContent>
              <ImagesItemsContent>
                <ImagesItemLink
                  aria-label='Hình ảnh nhà/phòng cho thuê 3, Xem tất cả ảnh'
                  href='#@'
                >
                  <ImagesItemLinkContent>
                    <picture>
                      <source srcSet={`${imgSrc}?im_w=960 1x`} media='(max-width: 743px)' />
                      <source
                        srcSet={`${imgSrc}?im_w=960 1x`}
                        media='(min-width: 743.1px) and (max-width: 1127px)'
                      />
                      <source
                        srcSet={`${imgSrc}?im_w=960 1x`}
                        media='(min-width: 1127.1px) and (max-width: 1439px)'
                      />
                      <source srcSet={`${imgSrc}?im_w=1200 1x`} media='(min-width: 1439.1px)' />
                      <img
                        aria-hidden='true'
                        alt=''
                        elementtiming='LCP-target'
                        fetchpriority='high'
                        id='FMP-target'
                        src={`${imgSrc}?im_w=720'`}
                        data-original-uri={`${imgSrc}`}
                      />
                    </picture>
                    <div
                      style={{
                        backgroundImage: `url("${imgSrc}?im_w=720")`,
                      }}
                    />
                  </ImagesItemLinkContent>
                </ImagesItemLink>
              </ImagesItemsContent>
            </ImagesItemsThird>
          </ImagesContent>
        </ImagesContainer>
        <ButtonShowImage>
          <a href='#@'>
            <div>
              <svg
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                role='presentation'
                focusable='false'
              >
                <path
                  d='m3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z'
                  fillRule='evenodd'
                />
              </svg>
              <div>Hiển thị tất cả ảnh</div>
            </div>
          </a>
        </ButtonShowImage>
      </Content>
    </Container>
  );
}

export default GridImagesDetail;
