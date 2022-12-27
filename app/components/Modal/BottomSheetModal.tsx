import _ from 'lodash';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Animation } from 'react-native-animatable';
import { Divider } from 'react-native-elements';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/EvilIcons';
import { wp } from '../../services/response-screen-service';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';
import { Text } from '../Text';

interface IProps {
  title?: string;
  isVisible?: boolean;
  children?: React.ReactNode;
  animationIn?: Animation;
  animationOut?: Animation;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  headerStyle?: object;
  headerTitleStyle?: object;
  description?: string;
  hasDivider?: boolean;
  onClose?: () => void;
  onPressRightIcon?: () => void;
  onPressLeftIcon?: () => void;
}

const BottomSheetModal = (props: IProps) => {
  const {
    title,
    isVisible,
    animationIn = 'slideInDown',
    animationOut = 'slideOutDown',
    children,
    onClose,
    leftIcon,
    rightIcon,
    headerStyle,
    headerTitleStyle,
    description,
    hasDivider,
    onPressRightIcon,
    onPressLeftIcon,
  } = props;

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn={animationIn}
      animationOut={animationOut}
      style={[
        styles.flex,
        styles.jus_end,
        {
          margin: 0,
        },
      ]}>
      {(!!title || !!leftIcon || !!rightIcon) && (
        <View
          style={[
            styles.bb_small,
            {
              borderColor: Colors.Grey100,
              borderTopLeftRadius: wp(8),
              borderTopRightRadius: wp(8),
              backgroundColor: 'white',
              ...headerStyle,
            },
          ]}>
          <View style={[styles.ph_medium, styles.pv_small]}>
            <View
              style={[
                styles.flex,
                styles.flex_row,
                styles.jus_between,
                styles.alg_center,
                { ...headerTitleStyle },
              ]}>
              {!!leftIcon ? leftIcon : null}

              {!!title ? (
                _.isString(title) ? (
                  <View style={[styles.flex, styles.flex_col]}>
                    <Text
                      type="footnote"
                      fontWeight="bold"
                      color={Colors.Black}>
                      {title}
                    </Text>
                    {!!description && (
                      <Text type="caption1" color={Colors.Text.Primary}>
                        {description}
                      </Text>
                    )}
                  </View>
                ) : (
                  title
                )
              ) : null}

              <TouchableOpacity
                onPress={rightIcon ? onPressRightIcon : onClose}>
                {!!rightIcon ? (
                  rightIcon
                ) : (
                  <Icon
                    name="close-o"
                    color={Colors.Text.Primary}
                    size={IconSizes.medium}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {hasDivider && <Divider />}

          {!!children && (
            <View style={[styles.ph_medium, styles.pv_medium]}>{children}</View>
          )}
        </View>
      )}
    </Modal>
  );
};

export default BottomSheetModal;
