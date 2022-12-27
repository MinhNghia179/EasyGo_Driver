import React from 'react';
import { View } from 'react-native';
import { wp } from '../../services/response-screen-service';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';

interface IProps {
  size: 'small' | 'medium' | 'large';
  color?: Colors;
  style?: any;
}

const PointLocationIcon = (props: IProps) => {
  const { size = 'medium', style, color = Colors.Blue300 } = props;

  const sizeStyle =
    size === 'small'
      ? styles.p_x2_small
      : size == 'medium'
      ? styles.p_x_small
      : styles.p_small;

  return (
    <View style={style}>
      <View
        style={[
          styles.rounded_full,
          styles.flex_row,
          styles.centered,
          {
            borderWidth: 5,
            width: wp(2),
            height: wp(2),
            borderColor: color,
          },
          sizeStyle,
        ]}>
        <View style={[styles.p_x_small, styles.rounded_full]}></View>
      </View>
    </View>
  );
};

export default PointLocationIcon;
