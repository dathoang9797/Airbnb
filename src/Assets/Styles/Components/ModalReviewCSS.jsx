import  { css } from 'twin.macro';

export const ModalReviewCSS = css`
  .wrap-modal-review {
    .ant-modal {
      width: 100% !important;
      max-width: 400px !important;

      @media (min-width: 500x) {
        max-width: 450px !important;
      }

      @media (min-width: 530px) {
        max-width: 500px !important;
      }

      @media (min-width: 580px) {
        max-width: 550px !important;
      }

      @media (min-width: 624px) {
        max-width: 600px !important;
      }

      @media (min-width: 940px) {
        max-width: 900px !important;
      }

      @media (min-width: 1000px) {
        max-width: 950px !important;
      }

      @media (min-width: 1120px) {
        max-width: 1030px !important;
      }
    }
    .ant-modal-content {
      border-radius: 12px;
    }

    .ant-modal-body {
      padding-top: 48px;
      padding-right: 8px;
      padding-left: 8px;
      @media (min-width: 940px) {
        padding-left: 16px !important;
      }

      @media (min-width: 1000px) {
        padding-left: 20px !important;
      }

      @media (min-width: 1120px) {
        padding-left: 24px !important;
      }

      @media (min-width: 1120px) {
        height: 600px;
      }
    }

    .ant-modal-close {
      top: 10px;
      left: 20px;
      position: absolute;
    }
  }
`;
