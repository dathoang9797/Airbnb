import { css } from 'twin.macro';

export const Mixins = {
  backgroundLinearGradient: (deg) =>
    css`
      background: linear-gradient(${deg}deg, #ff388e 0, #ff385c 51%, #ff4638 100%) !important;
    `,
};
