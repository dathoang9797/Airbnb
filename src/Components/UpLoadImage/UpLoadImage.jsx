import { localService } from '@/Services/LocalStorageService';
import { showError, showSuccess } from '@/Utils/Common';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload, Button } from 'antd';
import React, { useState } from 'react';
import { UpLoadImageCSS } from './UpLoadImage.styles';
import { UploadOutlined } from '@ant-design/icons';

function UpLoadImage({ idRoom, imageProp }) {
  const [loading, setLoading] = useState(false);
  const [imgRoom, setImgRoom] = useState(imageProp);
  const userInfo = localService.getUserInfo();
  const urlUploadImage = process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE_CAP_NHAT_ANH;
  const urlAirBnb = process.env.REACT_APP_BASE_URL_AIRBNB;
  const tokenCyberSoft = process.env.REACT_APP_TOKEN_CYBERSOFT;
  const tokenUser = userInfo.token;
  const keyNameRoom = process.env.REACT_APP_KEY_NAME_FORM_DATA_ROOM;
  const headerReq = {
    tokenByClass: tokenCyberSoft,
    token: tokenUser,
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      showError('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      showError('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleChange = async (info) => {
    const { status, name, originFileObj } = info.file;
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (status === 'done') {
      const baseImg64 = await getBase64(originFileObj);
      setImgRoom(baseImg64);
      setLoading(false);
      showSuccess(`${name} File Update Thành Công`);

      return;
    }

    if (status === 'error') {
      showError(`${name} File Update  Thất Bại`);
      setLoading(false);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <UpLoadImageCSS.Container>
      <Upload
        listType={imgRoom ? 'picture' : 'picture-card'}
        showUploadList={false}
        onChange={handleChange}
        className='avatar-uploader'
        beforeUpload={beforeUpload}
        accept='image/x-png, image/gif, image/jpg'
        action={`${urlAirBnb}${urlUploadImage}/${idRoom}`}
        headers={headerReq}
        name={keyNameRoom}
      >
        {imgRoom ? (
          <>
            <img src={imgRoom} alt={imgRoom} />
            {loading ? (
              <UpLoadImageCSS.LoadingContentCSS>
                <UpLoadImageCSS.LoadingOutlinedCSS />
              </UpLoadImageCSS.LoadingContentCSS>
            ) : (
              <Button icon={<UploadOutlined />}>Click to Update</Button>
            )}
          </>
        ) : (
          uploadButton
        )}
      </Upload>
    </UpLoadImageCSS.Container>
  );
}

export default UpLoadImage;
