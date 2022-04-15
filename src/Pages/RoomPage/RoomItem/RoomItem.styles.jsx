import tw, { styled } from 'twin.macro';

const RoomListRating = styled.div`
  display: flex;
  margin-top: auto;
  img {
    width: 14px;
    margin-right: 4px;
  }
  span {
    font-family: 'Circular Medium';
  }
`;

const RoomListPriceNight = styled.div`
  font-size: 18px;
  font-family: 'Circular Bold';
  & span {
    font-size: 18px;
    font-family: 'Circular Bold';
  }
  & span span {
    font-family: 'Circular Book';
    color: var(--color-medium);
  }
`;
const RoomListPriceTotal = styled.div`
  font-size: 14px;
  color: var(--color-text-light);
  text-decoration: underline;
  margin-top: 2px;
`;

const RoomListPrice = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
`;

const RoomListDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

const RoomListDesc = styled.div`
  padding-top: 15px;
  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const RoomListTitle = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background: none;
    border: none;
    outline: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0;
    cursor: pointer;

    &:after {
      opacity: 0;
      background: var(--color-medium);
      position: absolute;
      content: '';
      width: 48px;
      height: 48px;
      border-radius: 50%;
      z-index: -1;
      transition: all 0.3s;
    }
    &:hover:after {
      opacity: 1;
    }
    h2 {
      font-size: 18px;
      font-family: 'Circular Book';
      color: var(--grey-text-dark);
      margin: 5px 0 15px;
      font-weight: 400;
    }
  }
`;

const RoomListContent = styled.div`
  width: calc(100% - 300px);
  padding-left: 15px;
  display: flex;
  flex-direction: column;
`;

const RoomListImage = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  &::before {
    position: absolute;
    content: 'SUPERHOST';
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    border-radius: 4px;
    padding: 4px 8px;
    top: 10px;
    left: 10px;
    letter-spacing: 0.48px;
    font-size: 12px;
    font-family: 'Circular Medium';
    text-transform: uppercase;
  }
  button {
    position: absolute;
    top: 50%;
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 50%;
    overflow: hidden;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    opacity: 0;
    transition: 0.1s ease-in;
    cursor: pointer;
  }

  & button:hover {
    opacity: 1 !important;
  }

  & button img {
    width: 10px;
    height: 10px;
  }

  & button:first-of-type {
    left: 10px;
  }

  & button:last-of-type {
    right: 10px;
  }

  & img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const RoomListItem = styled.div`
  border-top: 1px solid #ebebeb;
  padding: 24px 0;
  display: flex;
  &:hover ${RoomListImage} button {
    opacity: 0.7;
  }
  .greyText {
    font-size: 14px;
    line-height: 18px;
    color: var(--grey-text-light);
    font-family: 'Circular Light';
  }
  .separator {
    width: 32px;
    height: 1px;
    background: var(--grey-med);
  }
`;

export const RoomItemStyle = {
  RoomListImage,
  RoomListItem,
  RoomListContent,
  RoomListTitle,
  RoomListDesc,
  RoomListDetail,
  RoomListPrice,
  RoomListPriceTotal,
  RoomListPriceNight,
  RoomListRating,
};
