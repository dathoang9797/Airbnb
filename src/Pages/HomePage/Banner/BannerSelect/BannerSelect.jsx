import React, { useMemo } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { BannerSelectCSS } from './BannerSelect.styles';
import { provincesVietNam } from '@Utils/Common/ProvincesVietNam';
import { Menu, Space } from 'antd';
import { NavLink } from 'react-router-dom';

function BannerSelect() {
  const { BannerSelect, Container, GeocodeIcon } = BannerSelectCSS;
  const urlRoom = process.env.REACT_APP_LINK_ROOM;

  const handleItem = useMemo(() => {
    return provincesVietNam.map((cityName, index) => {
      return {
        label: (
          <>
            <NavLink to={`${urlRoom}/${cityName}`}>{cityName}</NavLink>
          </>
        ),
        key: `${index}`,
      };
    }).sort();
  }, [urlRoom]);


  const menu = <Menu items={handleItem} />;

  return (
    <Container>
      <BannerSelect overlay={menu} trigger={['click']} overlayClassName='dropdown-province'>
        <Space>
          All Locations <IoLocationSharp />
        </Space>
      </BannerSelect>

      <span className='type-and-hit-enter'>type and hit enter</span>
    </Container>
  );
}

export default BannerSelect;
