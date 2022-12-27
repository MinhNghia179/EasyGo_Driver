import React from 'react';
import { View } from 'react-native';
import { Animation } from 'react-native-animatable';
import Modal from 'react-native-modal';
import { Text } from '../../components/Text';
import { wp } from '../../services/response-screen-service';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';

interface IActionModal {
  title?: string;
  isVisible?: boolean;
  titleColor?: Colors;
  children?: React.ReactNode;
  animationIn?: Animation;
  animationOut?: Animation;
  backgroundColor?: Colors;
  onClose?: () => void;
}

const ActionModal = (props: IActionModal) => {
  const {
    title,
    onClose,
    children,
    isVisible,
    titleColor,
    backgroundColor = Colors.White,
    animationIn = 'slideInDown',
    animationOut = 'slideOutDown',
  } = props;

  return (
    <Modal
      style={{ margin: 0 }}
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn={animationIn}
      animationOut={animationOut}>
      <View
        style={[
          styles.absolute,
          styles.rounded,
          styles.flex,
          {
            backgroundColor,
            padding: wp(20),
            left: wp(15),
            right: wp(15),
          },
        ]}>
        {!!title && (
          <Text
            type="footnote"
            fontWeight="bold"
            color={titleColor ? titleColor : Colors.Text.DarkBlue}>
            {title}
          </Text>
        )}

        {!!children && <View style={[styles.mt_medium]}>{children}</View>}
      </View>
    </Modal>
  );
};

export default ActionModal;
