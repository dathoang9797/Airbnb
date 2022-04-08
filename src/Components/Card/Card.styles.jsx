import tw, { styled } from 'twin.macro';

const CardContent = styled.div`
  --content-mini-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.32), 0px 2px 4px rgba(0, 0, 0, 0.18);
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 28px;
  position: relative;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 150ms ease 0s;
  div {
    background-color: rgb(255, 255, 255);
    border-radius: 28px;
    box-shadow: rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px;
    color: rgb(34, 34, 34);
    height: 30px;

    position: relative;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 250ms cubic-bezier(0, 0, 0.1, 1) 0s;
  }

  div div {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    opacity: 1;
    transition: opacity 250ms ease 0s;
    white-space: nowrap;
    padding: 0px 8px;
  }
  div div span {
    font-weight: 800 !important;
    font-size: 14px !important;
    line-height: 18px !important;
  }
`;

const CardButton = styled.button`
  color: inherit;
  border: none;
  margin: 0px;
  padding: 0px;
  background: transparent;
  width: auto;
  overflow: visible;
  font: inherit;
`;

const CardContainer = styled.div`
  transform: translate(calc(-50% + 0px), calc(50% + 0px));
  transition: transform 0.2s ease 0s;
  left: 50%;
  position: absolute;
  bottom: 0px;
  z-index: 0;
  pointer-events: auto;
  font-family: 'Circular Bold';
`;

export const CardCSS = {
  CardContainer,
  CardContent,
  CardButton,
};
