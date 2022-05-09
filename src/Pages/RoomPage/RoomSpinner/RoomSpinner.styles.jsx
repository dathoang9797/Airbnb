import tw, { styled } from 'twin.macro';
import { SpinnerDotCSS } from '@Components/SpinnerDot/SpinnerDot.styles';

const {
  Container: ContainerSpinner,
  FirstDot: FirstDotSpinner,
  SecondDot: SecondDopSpinner,
  ThirdDot: ThirdDotSpinner,
} = SpinnerDotCSS;

const Container = styled(ContainerSpinner)`
  ${tw`my-10 relative `}
`;

const FirstDot = styled(FirstDotSpinner)``;

const SecondDot = styled(SecondDopSpinner)``;

const ThirdDot = styled(ThirdDotSpinner)``;

export const RoomSpinnerCSS = {
  Container,
  FirstDot,
  SecondDot,
  ThirdDot,
};
