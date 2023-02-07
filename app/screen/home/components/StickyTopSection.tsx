import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { Text } from '../../../components/Text';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {
  activeStatus: boolean;
}

const StickyTopSection = (props: IProps) => {
  const { activeStatus } = props;
  return (
    <View
      style={[
        styles.p_medium,
        styles.flex_row,
        styles.alg_center,
        {
          backgroundColor: Colors.Orange500,
        },
      ]}>
      <Icon
        style={[styles.ph_small]}
        name={activeStatus ? 'day-sunny' : 'night-clear'}
        color={Colors.Black}
        size={IconSizes.small}
      />
      <View>
        <Text
          fontWeight="bold"
          type="footnote"
          color={Colors.Text.Primary}>{`Trạng thái của bạn: ${
          activeStatus ? 'Online' : 'Offline'
        }!`}</Text>
        <Text type="footnote">
          {activeStatus
            ? 'Bạn đang hoạt động, hãy chờ đợi để nhận đơn hàng'
            : 'Hãy bật trạng thái để bắt đầu nhận đơn nào.'}
        </Text>
      </View>
    </View>
  );
};

export default StickyTopSection;
