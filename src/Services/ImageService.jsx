import axiosClient from '@Utils/Http/AxiosClient';

export const imagesService = {
  async convertUrlToBase64(imageUrl, isLoading =true , isLoadingPopup) {
    if (imageUrl.startsWith('data:')) return imageUrl;
    const config = {
      responseType: 'blob',
      headers: { isLoading  , isLoadingPopup },
      timeout: 30000,
    };

    const encodeUrl = encodeURI(imageUrl);
    const reader = new FileReader();
    const blob = await axiosClient.get(encodeUrl, config);
    if (!blob) return;
    reader.readAsDataURL(blob);
    return new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result);
    });
  },
  async resizeImage(imageUrl, width, height) {},
};
