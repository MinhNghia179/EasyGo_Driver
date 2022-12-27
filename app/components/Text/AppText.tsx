import React from 'react';
import { Text } from 'react-native';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
interface IAppTextProps {
  type?:
    | 'headline'
    | 'body'
    | 'callout'
    | 'subhead'
    | 'footnote'
    | 'caption1'
    | 'caption2';
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold';
  color?: Colors;
  numberOfLines?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: any;
  allowFontScaling?: boolean;
  children?: React.ReactNode;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  onPress?: () => void;
}

const AppText = (props: IAppTextProps) => {
  const {
    type,
    fontWeight,
    color,
    numberOfLines,
    textAlign,
    allowFontScaling = true,
    style = {},
    children,
    textDecorationLine = 'none',
    ...data
  } = props;

  const textStyle: [any] = [{ color: color || Colors.Text.Primary }];

  textStyle.push({
    fontWeight,
    textDecorationLine,
  });

  switch (type) {
    case 'headline':
      textStyle.push({ ...styles.fs_18 });
      break;
    case 'body':
      textStyle.push({ ...styles.fs_17 });
      break;
    case 'callout':
      textStyle.push({ ...styles.fs_16 });
      break;
    case 'subhead':
      textStyle.push({ ...styles.fs_14 });
      break;
    case 'footnote':
      textStyle.push({ ...styles.fs_13 });
      break;
    case 'caption1':
      textStyle.push({ ...styles.fs_12 });
      break;
    case 'caption2':
      textStyle.push({ ...styles.fs_11 });
      break;
  }

  if (textAlign) {
    textStyle.push({ textAlign });
  }

  return (
    <Text
      style={[textStyle, { ...style }]}
      numberOfLines={numberOfLines ? numberOfLines : null}
      allowFontScaling={allowFontScaling}
      {...data}>
      {children}
    </Text>
  );
};

export default AppText;
