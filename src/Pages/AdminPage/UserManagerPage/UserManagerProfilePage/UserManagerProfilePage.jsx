import React from 'react';
import { UserManagerProfileCSS } from './UserManagerProfilePage.styles';
import { selectQuanLyNguoiDung } from '@Redux/Selector/QuanLyNguoiDungSelector';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { Redirect } from 'react-router';
import moment from 'moment';
import { images } from '@Assets/Images';
const { account } = images;

function UserManagerProfile() {
  const { selectChiTietNguoiDung } = selectQuanLyNguoiDung;
  const chiTietNguoiDung = useSelector(selectChiTietNguoiDung, _.isEqual);
  const isHasChiTietNguoiDung = _.isEmpty(chiTietNguoiDung);
  const urlUserManager = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER;
  const { address, avatar, birthday, email, gender, name, phone, tickets } = chiTietNguoiDung;

  return isHasChiTietNguoiDung ? (
    <Redirect to={urlUserManager} />
  ) : (
    <UserManagerProfileCSS.Container>
      <UserManagerProfileCSS.Content>
        <UserManagerProfileCSS.Desc>
          <UserManagerProfileCSS.Img>
            <img src={avatar ? avatar : account} alt={avatar} />
          </UserManagerProfileCSS.Img>
        </UserManagerProfileCSS.Desc>

        <UserManagerProfileCSS.About>
          <UserManagerProfileCSS.Grid>
            <UserManagerProfileCSS.Content>
              <UserManagerProfileCSS.GridKey>Name</UserManagerProfileCSS.GridKey>
              <UserManagerProfileCSS.GridItem>{name}</UserManagerProfileCSS.GridItem>
            </UserManagerProfileCSS.Content>

            <UserManagerProfileCSS.Content>
              <UserManagerProfileCSS.GridKey>Email</UserManagerProfileCSS.GridKey>
              <UserManagerProfileCSS.GridItem>{email}</UserManagerProfileCSS.GridItem>
            </UserManagerProfileCSS.Content>

            <UserManagerProfileCSS.Content>
              <UserManagerProfileCSS.GridKey>Address</UserManagerProfileCSS.GridKey>
              <UserManagerProfileCSS.GridItem>{address}</UserManagerProfileCSS.GridItem>
            </UserManagerProfileCSS.Content>

            <UserManagerProfileCSS.Content>
              <UserManagerProfileCSS.GridKey>Gender</UserManagerProfileCSS.GridKey>
              <UserManagerProfileCSS.GridItem>
                {gender ? 'Nam' : 'Nữ'}
              </UserManagerProfileCSS.GridItem>
            </UserManagerProfileCSS.Content>

            <UserManagerProfileCSS.Content>
              <UserManagerProfileCSS.GridKey>Phone</UserManagerProfileCSS.GridKey>
              <UserManagerProfileCSS.GridItem>{phone}</UserManagerProfileCSS.GridItem>
            </UserManagerProfileCSS.Content>

            <UserManagerProfileCSS.Content>
              <UserManagerProfileCSS.GridKey>Tickets</UserManagerProfileCSS.GridKey>
              <UserManagerProfileCSS.GridItem>
                {tickets.map((ticket, index) => {
                  return (
                    <>
                      {ticket} {index < tickets.length - 1 ? ', ' : ''}
                    </>
                  );
                })}
              </UserManagerProfileCSS.GridItem>
            </UserManagerProfileCSS.Content>

            <UserManagerProfileCSS.Content>
              <UserManagerProfileCSS.GridKey>Birthday</UserManagerProfileCSS.GridKey>
              <UserManagerProfileCSS.GridItem>
                {moment(birthday).format('DD/MM/YYYY')}
              </UserManagerProfileCSS.GridItem>
            </UserManagerProfileCSS.Content>
          </UserManagerProfileCSS.Grid>
        </UserManagerProfileCSS.About>
      </UserManagerProfileCSS.Content>
    </UserManagerProfileCSS.Container>
  );
}

export default UserManagerProfile;
