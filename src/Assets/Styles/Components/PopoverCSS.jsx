import tw, { css } from 'twin.macro';

export const PopoverCSS = css`
  .wrap-card-popup {
    ${tw`p-0 bg-white rounded-lg box-shadow[ 0 0 0 1px rgb(0 0 0 / 32%)] color[#222] pointer-events-auto font-family[Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
    overflow: hidden]`};
    .ant-popover-arrow {
      ${tw`hidden`};
    }

    .ant-popover-placement-bottom,
    .ant-popover-placement-bottomLeft,
    .ant-popover-placement-bottomRight {
      ${tw`mt-[15px]`};
    }

    .ant-popover-title,
    .ant-popover-inner-content {
      ${tw`p-0 border-b-0`};
    }
  }

  .wrapper-price-popup {
    ${tw`w-full max-w-[410px] padding[0 1.5rem 0rem 1.5rem]`}

    .ant-popover-arrow {
      ${tw`hidden`};
    }

    .ant-popover-title,
    .ant-popover-inner-content {
      ${tw`p-0 border-b-0 overflow-hidden`};
    }
  }
`;
