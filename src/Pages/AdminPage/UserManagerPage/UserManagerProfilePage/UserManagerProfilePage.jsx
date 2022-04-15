import React, { Fragment } from 'react';
import { UserManagerProfileCSS } from './UserManagerProfilePage.styles';
import { quanLyNguoiDungSelector } from '@Redux/Selector/QuanLyNguoiDungSelector';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { Redirect } from 'react-router';
import moment from 'moment';
import { images } from '@Assets/Images';
const { account } = images;

function UserManagerProfile() {
  const { selectChiTietNguoiDung } = quanLyNguoiDungSelector;
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
            <UserManagerProfileCSS.GridContent>
              <UserManagerProfileCSS.GridKey>Name </UserManagerProfileCSS.GridKey>
              <UserManagerProfileCSS.GridItem>{name}</UserManagerProfileCSS.GridItem>
            </UserManagerProfileCSS.GridContent>

            <UserManagerProfileCSS.GridContent>
              <UserManagerProfileCSS.GridKey>Email:</UserManagerProfileCSS.GridKey>
              <UserManagerProfileCSS.GridItem>{email}</UserManagerProfileCSS.GridItem>
            </UserManagerProfileCSS.GridContent>

            <UserManagerProfileCSS.GridContent>
              <UserManagerProfileCSS.GridKey>Address:</UserManagerProfileCSS.GridKey>
              <UserManagerProfileCSS.GridItem>{address}</UserManagerProfileCSS.GridItem>
            </UserManagerProfileCSS.GridContent>

            <UserManagerProfileCSS.GridContent>
              <UserManagerProfileCSS.GridKey>Gender:</UserManagerProfileCSS.GridKey>
              <UserManagerProfileCSS.GridItem>
                {gender ? 'Nam' : 'Nữ'}
              </UserManagerProfileCSS.GridItem>
            </UserManagerProfileCSS.GridContent>

            <UserManagerProfileCSS.GridContent>
              <UserManagerProfileCSS.GridKey>Phone:</UserManagerProfileCSS.GridKey>
              <UserManagerProfileCSS.GridItem>{phone}</UserManagerProfileCSS.GridItem>
            </UserManagerProfileCSS.GridContent>

            <UserManagerProfileCSS.GridContent>
              <UserManagerProfileCSS.GridKey>Tickets:</UserManagerProfileCSS.GridKey>
              <UserManagerProfileCSS.GridItem>
                {tickets.map((ticket, index) => {
                  return (
                    <Fragment key={`${index}-${ticket}`}>
                      {ticket} {index < tickets.length - 1 ? ', ' : ''}
                    </Fragment>
                  );
                })}
              </UserManagerProfileCSS.GridItem>
            </UserManagerProfileCSS.GridContent>

            <UserManagerProfileCSS.GridContent>
              <UserManagerProfileCSS.GridKey>Birthday</UserManagerProfileCSS.GridKey>
              <UserManagerProfileCSS.GridItem>
                {moment(birthday).format('DD/MM/YYYY')}
              </UserManagerProfileCSS.GridItem>
            </UserManagerProfileCSS.GridContent>
          </UserManagerProfileCSS.Grid>
        </UserManagerProfileCSS.About>
      </UserManagerProfileCSS.Content>
    </UserManagerProfileCSS.Container>
  );
}

export default UserManagerProfile;
