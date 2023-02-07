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
        Xin lỗi. Đơn cuốc xe đã bị hủy bỏ bởi{' '}
        <Text fontWeight="bold">{shiftDetails?.userName}</Text>
        và bạn sẽ không nhận bất kỳ khoản hoa hồng nào từ đơn đặt hàng của khách
        hàng.
      </Text>
      <View style={[styles.mv_small]}>
        <Text fontWeight="bold">Lý do: {reason}</Text>
      </View>
      <View style={[styles.flex_col, styles.alg_center, styles.alg_end]}>
        <PrimaryButton
          color={Colors.Orange500}
          style={[styles.mv_medium]}
          onPress={onClose}>
          Đóng
        </PrimaryButton>
      </View>
    </ActionModal>
  );
};

export default CancelBooking;
