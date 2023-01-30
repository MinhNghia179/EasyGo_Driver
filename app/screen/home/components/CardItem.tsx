import React from 'react';
import { View } from 'react-native';
import { Text } from '../../../components/Text';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';

interface IProps {
  label: string;
  value?: string;
}
const CardItem = (props: IProps) => {
  const { label, value } = props;

  return (
    <View
      style={[
        styles.flex_row,
        styles.alg_center,
        styles.mv_x_small,
        {
          borderColor: Colors.Grey300,
        },
      ]}>
      <View style={[styles.mr_medium, { minWidth: wp(52) }]}>
        <Text type="footnote" fontWeight="bold" color={Colors.Black}>
          {label}
        </Text>

        {!!value && (
          <Text type="caption1" color={Colors.Text.Primary}>
            {value}
          </Text>
        )}
      </View>
    </View>
  );
};

export default CardItem;
