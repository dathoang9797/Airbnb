import { css } from 'twin.macro';

export const PopoverCSS = css`
  .wrap-card-popup {
    padding: 0;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 32%);
    color: #222;
    pointer-events: auto;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
    overflow: hidden;
    .ant-popover-arrow {
      display: none;
    }

    .ant-popover-placement-bottom,
    .ant-popover-placement-bottomLeft,
    .ant-popover-placement-bottomRight {
      margin-top: 15px;
    }

    .ant-popover-title,
    .ant-popover-inner-content {
      padding: 0;
      border-bottom: 0;
    }
  }
`;
