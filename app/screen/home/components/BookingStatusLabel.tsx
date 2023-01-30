import { capitalize } from 'lodash';
import React from 'react';
import { View } from 'react-native';
import { Text } from '../../../components/Text';
import { BookingStatus } from '../../../constants/constant';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';

interface IProps {
  value?: string;
}
const BookingStatusLabel = (props: IProps) => {
  const { value } = props;

  let labelColor = '';

  switch (value) {
    case BookingStatus.CREATED: {
      labelColor = Colors.Blue400;
      break;
    }
    case BookingStatus.ACCEPT: {
      labelColor = Colors.Yellow400;
      break;
    }
    case BookingStatus.REJECT: {
      labelColor = Colors.Red400;
      break;
    }
    case BookingStatus.SUCCESS: {
      labelColor = Colors.Green400;
      break;
    }
    default: {
      labelColor = Colors.Grey400;
    }
  }

  return (
    <View
      style={[
        styles.flex_row,
        styles.alg_center,
        styles.mv_x_small,
        styles.rounded_full,
        styles.jus_center,
        styles.p_x_small,
        {
          backgroundColor: labelColor,
          minWidth: wp(52),
        },
      ]}>
      <Text type="caption1" fontWeight="bold" color={Colors.White}>
        {capitalize(value)}
      </Text>
    </View>
  );
};

export default BookingStatusLabel;
