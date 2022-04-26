import React from 'react';
import { BookingDetailInfoCSS } from './BookingDetailInfo.styles';

function BookingDetailInfo(props) {
  const {
    Container,
    Header,
    HeaderButton,
    HeaderDesc,
    HeaderImage,
    HeaderImageContent,
    DetailContent,
    DetailItem,
    DetailDesc,
    DetailIcon,
    DetailCancelDay,
    DetailParagraph,
    DetailParagraphItem,
    DetailParagraphItemShowMore,
  } = BookingDetailInfoCSS;

  const { guests, bedRoom, bath, description } = props;

  return (
    <Container>
      <Header>
        <HeaderDesc>
          <div>
            <h2 tabIndex={-1} elementtiming='LCP-target'>
              Phòng riêng tại nhà. Chủ nhà&nbsp;Dat
            </h2>
          </div>
          <ol>
            <li>
              <span>{guests} khách&nbsp;</span>
            </li>
            <li>
              <span aria-hidden='true'>·&nbsp;</span>
              <span>{bedRoom} phòng ngủ&nbsp;</span>
            </li>
            <li>
              <span aria-hidden='true'>·&nbsp;</span>
              <span>1 giường&nbsp;</span>
            </li>
            <li>
              <span aria-hidden='true'> ·&nbsp;</span>
              <span>{bath} phòng tắm riêng</span>
            </li>
          </ol>
        </HeaderDesc>
        <HeaderImage>
          <div>
            <HeaderButton aria-label='Tìm hiểu thêm về chủ nhà – Huynh.' type='button'>
              <HeaderImageContent>
                <div role='img' aria-busy='false' aria-label='Tìm hiểu thêm về chủ nhà – Huynh.'>
                  <img
                    aria-hidden='true'
                    alt='Tìm hiểu thêm về chủ nhà – Huynh.'
                    decoding='async'
                    elementtiming='LCP-target'
                    src='https://a0.muscache.com/im/pictures/user/ceee1049-e8a0-4a7e-850e-7becdace46e2.jpg?im_w=240'
                    data-original-uri='https://a0.muscache.com/im/pictures/user/ceee1049-e8a0-4a7e-850e-7becdace46e2.jpg?im_w=240'
                  />
                  <div
                    style={{
                      backgroundImage:
                        'url("https://a0.muscache.com/im/pictures/user/ceee1049-e8a0-4a7e-850e-7becdace46e2.jpg?im_w=240")',
                    }}
                  />
                </div>
              </HeaderImageContent>
            </HeaderButton>
          </div>
        </HeaderImage>
      </Header>
      <DetailContent>
        <DetailItem>
          <DetailIcon>
            <svg
              viewBox='0 0 32 32'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              role='presentation'
              focusable='false'
            >
              <path d='m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z' />
            </svg>
          </DetailIcon>
          <DetailDesc>
            <h1>Tự nhận phòng</h1>
            <span>Tự nhận phòng bằng khóa thông minh.</span>
          </DetailDesc>
        </DetailItem>
        <DetailItem>
          <DetailIcon>
            <svg
              viewBox='0 0 32 32'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              role='presentation'
              focusable='false'
            >
              <path d='m16.8438 27.1562-.00005-3.39845-.2608465.0913211c-.9857292.3215073-2.0303948.5116467-3.1127817.5499306l-.4076218.0071983-.2927873-.0037049c-6.03236807-.1528291-10.89442655-5.0148222-11.04725775-11.0472069l-.00370495-.2927882.00370495-.2927873c.1528312-6.03236807 5.01488968-10.89442655 11.04725775-11.04725775l.2927873-.00370495.2927882.00370495c6.0323847.1528312 10.8943778 5.01488968 11.0472069 11.04725775l.0037049.2927873-.00663.3912275c-.0484899 1.4286741-.3615343 2.7917824-.8920452 4.0406989l-.1327748.2963236 7.90645 7.90705v5.5834h-5.5834l-4.12505-4.12545zm-6.5313-19.93745c1.708641 0 3.09375 1.38511367 3.09375 3.09375 0 1.7086436-1.3851064 3.09375-3.09375 3.09375-1.70863633 0-3.09375-1.385109-3.09375-3.09375 0-1.70863365 1.38511635-3.09375 3.09375-3.09375zm0 2.0625c-.56954635 0-1.03125.46170365-1.03125 1.03125 0 .5695521.46169942 1.03125 1.03125 1.03125.5695564 0 1.03125-.4616936 1.03125-1.03125 0-.56955058-.4616979-1.03125-1.03125-1.03125zm12.1147 15.81255 4.12455 4.12495h2.667v-2.667l-8.37295-8.37255.3697-.6775.1603998-.3074798c.56763-1.1397167.90791-2.4128858.9606815-3.761954l.0072187-.3697662-.0038197-.2688703c-.1397418-4.91222958-4.0963692-8.86881961-9.0086094-9.00856l-.2688709-.0038197-.2688703.0038197c-4.91222958.13974039-8.86881961 4.09633042-9.00856 9.00856l-.0038197.2688703.0038197.2688709c.14228112 5.0015536 4.24146819 9.0124291 9.2774303 9.0124291 1.4456308 0 2.8116781-.3298367 4.0293209-.9177001l.3012791-.1522999 1.5131-.7998-.00045 4.61975z' />
            </svg>
          </DetailIcon>
          <DetailDesc>
            <h1>Trải nghiệm nhận phòng tuyệt vời</h1>
            <span>100% khách gần đây đã xếp hạng 5 sao cho quy trình nhận phòng.</span>
          </DetailDesc>
        </DetailItem>
        <DetailCancelDay>
          <DetailIcon>
            <svg
              viewBox='0 0 32 32'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              role='presentation'
              focusable='false'
            >
              <path d='m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z' />
            </svg>
          </DetailIcon>
          <DetailDesc>
            <h1>Hủy miễn phí trước 3 thg 5.</h1>
          </DetailDesc>
        </DetailCancelDay>
      </DetailContent>
      <DetailParagraph>
        <DetailParagraphItem>
          <span>
            <span>{description}</span>
          </span>
        </DetailParagraphItem>
        <DetailParagraphItemShowMore>
          <button type='button'>
            <span>
              <span>Hiển thị thêm</span>
              <span>
                <svg viewBox='0 0 18 18' role='presentation' aria-hidden='true' focusable='false'>
                  <path
                    d='m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z'
                    fillRule='evenodd'
                  />
                </svg>
              </span>
            </span>
          </button>
        </DetailParagraphItemShowMore>
      </DetailParagraph>
    </Container>
  );
}
export default BookingDetailInfo;
