import React from 'react';
import { View } from 'react-native';
import { Text } from '../../../components/Text';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';

interface IProps {
  label: string;
  value: string;
}
const CardItem = (props: IProps) => {
  const { label, value } = props;

  return (
    <View
      style={[
        styles.bt_small,
        styles.mt_small,
        styles.pt_small,
        styles.flex_row,
        styles.alg_center,
        {
          borderColor: Colors.Grey300,
          borderTopWidth: 0.5,
        },
      ]}>
      <View style={[styles.mr_medium, { minWidth: wp(52) }]}>
        <Text type="caption2" color={Colors.Text.GreySecondary}>
          {label}
        </Text>
        <Text
          type="subhead"
          fontWeight="bold"
          color={Colors.Text.Primary}
          style={{ flexShrink: 1 }}>
          {value}
        </Text>
      </View>
    </View>
  );
};

export default CardItem;
