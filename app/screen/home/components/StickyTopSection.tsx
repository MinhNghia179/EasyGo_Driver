import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { Text } from '../../../components/Text';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {
  isOnline: boolean;
}

const StickyTopSection = (props: IProps) => {
  const { isOnline } = props;
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
        name={isOnline ? 'day-sunny' : 'night-clear'}
        color={Colors.Black}
        size={IconSizes.small}
      />
      <View>
        <Text
          fontWeight="bold"
          type="footnote"
          color={Colors.Text.Primary}>{`You are ${
          isOnline ? 'online' : 'offline'
        }!`}</Text>
        <Text type="footnote">
          {isOnline
            ? 'Customers are waiting for you. Let go...'
            : 'Go online to start accepting jobs'}
        </Text>
      </View>
    </View>
  );
};

export default StickyTopSection;
