import React from 'react';
import { View } from 'react-native';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { ActionModal } from '../../../components/Modal';
import { Text } from '../../../components/Text';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';

interface IProps {
  visible: boolean;
  reason: string;
  shiftDetails: any;
  onClose: () => void;
}

const CancelBooking = (props: IProps) => {
  const { visible, onClose, shiftDetails, reason } = props;

  return (
    <ActionModal isVisible={visible} title="Booking canceled" onClose={onClose}>
      <Text type="footnote">
        Sorry. The booking has been canceled by{' '}
        <Text fontWeight="bold">{shiftDetails?.userName}</Text> and you will not
        receive any commission from customer orders.
      </Text>
      <View style={[styles.mv_small]}>
        <Text fontWeight="bold">Reason: {reason}</Text>
      </View>
      <View style={[styles.flex_col, styles.alg_center, styles.alg_end]}>
        <PrimaryButton
          color={Colors.Orange500}
          style={[styles.mv_medium]}
          onPress={onClose}>
          Close
        </PrimaryButton>
      </View>
    </ActionModal>
  );
};

export default CancelBooking;
