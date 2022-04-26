import React from 'react';
import { TitleDetailCSS } from './TitleDetail.styles';

function TitleDetail() {
  const {
    Button,
    Container,
    Desc,
    DescLeft,
    DescLeftFirst,
    DescLeftSecond,
    DescLeftThird,
    DescRight,
    DescRightContent,
    DescRightContentItem,
    Heading,
    Icon,
    Text,
  } = TitleDetailCSS;

  return (
    <Container>
      <Icon>
        <button type='button'>
          <svg
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
            aria-label='Tiêu đề được dịch tự động: ♥ Ban công lởm chởm * Gần chợ Bến Thành * 3A♥'
            role='img'
            focusable='false'
          >
            <path d='M9 0a1 1 0 0 1 .993.883L10 1v5h5a1 1 0 0 1 .993.883L16 7v8a1 1 0 0 1-.883.993L15 16H7a1 1 0 0 1-.993-.883L6 15v-5H1a1 1 0 0 1-.993-.883L0 9V1A1 1 0 0 1 .883.007L1 0h8zm1.729 7l-1.393.495.233.217.13.132c.125.127.227.245.308.352l.073.103.048.073.045.077H7.308v1.309h1.207l.166.52.09.266.112.29a6.294 6.294 0 0 0 1.109 1.789c-.495.315-1.119.607-1.87.87l-.331.112-.346.108-.445.134L7.72 15l.407-.125.386-.128c1.007-.349 1.836-.752 2.486-1.214.57.405 1.277.764 2.12 1.08l.369.134.386.128.406.125.72-1.153-.445-.134-.26-.08-.345-.115c-.783-.27-1.43-.57-1.94-.895a6.3 6.3 0 0 0 1.068-1.694l.128-.32.114-.33.165-.521h1.208V8.449H11.64l-.093-.231a3.696 3.696 0 0 0-.554-.917l-.126-.149-.14-.152zm1.35 2.758l-.042.133-.076.224-.103.264A4.985 4.985 0 0 1 11 11.76a4.952 4.952 0 0 1-.743-1.127l-.115-.254-.103-.264-.076-.224-.042-.133h2.158zM9 1H1v8h5V7c0-.057.005-.113.014-.167H3.827L3.425 8H2l2.257-6h1.486l1.504 4H9V1zM5 3.411L4.253 5.6h1.502L5 3.411z' />
          </svg>
        </button>
      </Icon>
      <Heading>
        <h1>♥ Ban công lởm chởm * Gần chợ Bến Thành * 3A♥</h1>
      </Heading>
      <Desc>
        <DescLeft>
          <DescLeftFirst>
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
            <Text aria-hidden='true'>4,75 ·</Text>
            <span>
              <Button aria-label='Xếp hạng 4,75/5 theo 16 đánh giá.' type='button'>
                16 đánh giá
              </Button>
            </span>
          </DescLeftFirst>
          <DescLeftSecond aria-hidden='true'>·</DescLeftSecond>
          <DescLeftThird>
            <Button type='button'>
              <Text aria-hidden='false'>Việt Nam</Text>
            </Button>
          </DescLeftThird>
        </DescLeft>
        <DescRight>
          <DescRightContent>
            <div>
              <Button>
                <DescRightContentItem>
                  <span>
                    <svg
                      viewBox='0 0 32 32'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                      role='presentation'
                      focusable='false'
                    >
                      <g fill='none'>
                        <path d='M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9' />
                        <path d='M16 3v23V3z' />
                        <path d='M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13' />
                      </g>
                    </svg>
                  </span>
                  Chia sẻ
                </DescRightContentItem>
              </Button>
            </div>
            <div>
              <Button
                aria-label='Thêm nhà/phòng cho thuê vào danh sách'
                data-testid='pdp-save-button-unsaved'
                type='button'
              >
                <DescRightContentItem>
                  <span className='_14tkmhr'>
                    <svg
                      viewBox='0 0 32 32'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                      role='presentation'
                      focusable='false'
                    >
                      <path d='m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z' />
                    </svg>
                  </span>
                  Lưu
                </DescRightContentItem>
              </Button>
            </div>
          </DescRightContent>
        </DescRight>
      </Desc>
    </Container>
  );
}

export default TitleDetail;
