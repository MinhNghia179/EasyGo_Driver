import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';
import { Text } from '../Text';

interface IProps {
  label?: string;
  description?: string;
  style?: any;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
  rightIconName?: 'right' | 'plus' | string;
  isCustom?: boolean;
  hasBorderRadius?: boolean;
  hasShadow?: boolean;
  underline?: boolean;
  onPress?: () => void;
}

const CardItem = (props: IProps) => {
  const {
    children,
    label,
    leftIcon,
    description,
    rightIcon,
    onPress,
    isCustom,
    style,
    hasBorderRadius,
    hasShadow,
    rightIconName,
    underline,
  } = props;

  const renderRightIcon = () => {
    let name = '';

    switch (rightIconName) {
      case 'right': {
        name = 'chevron-small-right';
        break;
      }
      case 'plus': {
        name = 'plus';
        break;
      }
    }
    return (
      <Icon name={name} size={IconSizes.small} color={Colors.Text.Primary} />
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...(!isCustom && { onPress: onPress })}
      style={[
        styles.pv_12,
        !underline && styles.p_12,
        hasBorderRadius && styles.rounded_small,
        hasShadow && styles.shadow,
        {
          backgroundColor: Colors.White,
          borderBottomWidth: underline && 0.1,
        },
        style,
      ]}>
      {isCustom ? (
        children
      ) : (
        <View
          style={[
            styles.flex,
            styles.flex_row,
            styles.jus_between,
            styles.alg_center,
          ]}>
          <View style={[styles.flex, styles.flex_row, styles.alg_center]}>
            {!!leftIcon && leftIcon}
            <Text type="footnote" color={Colors.Text.Primary}>
              {description || ''}
            </Text>
          </View>
          <View style={[styles.flex, styles.flex_row, styles.alg_center]}>
            <Text type="footnote" color={Colors.Text.Primary}>
              {label || ''}
            </Text>
            {(!!rightIcon || rightIconName) && (
              <View style={[styles.ml_x_small]}>{renderRightIcon()}</View>
            )}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CardItem;
