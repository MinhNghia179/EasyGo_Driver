import DeviceInfo from 'react-native-device-info';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const hp = (px: number) => {
  return (px && heightPercentageToDP(((px / 812) * 100).toFixed(2))) || 0;
};

export const wp = (px: number) => {
  return (px && widthPercentageToDP(((px / 375) * 100).toFixed(2))) || 0;
};

export const wpFont = (px: number) => {
  const wp = DeviceInfo.isTablet()
    ? ((px / 375) * 75).toFixed(2)
    : ((px / 375) * 100).toFixed(2);
  return (px && widthPercentageToDP(wp)) || 0;
};

export const wpFontLineHeight = (px: number) => {
  return wpFont(px) * 1.2;
};

export const hpImage = (px: number) => {
  const hp = DeviceInfo.isTablet()
    ? ((px / 812) * 90).toFixed(2)
    : ((px / 812) * 100).toFixed(2);
  return heightPercentageToDP(hp);
};

export const wpImage = (px: number) => {
  const wp = DeviceInfo.isTablet()
    ? ((px / 375) * 75).toFixed(2)
    : ((px / 375) * 100).toFixed(2);
  return widthPercentageToDP(wp);
};
