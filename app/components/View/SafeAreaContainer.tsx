import React, { useState } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { hp, wp } from '../../services/response-screen-service';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';
import { Text } from '../Text';

interface ISafeAreaViewProps {
  backgroundColor?: Colors | string;
  left?: React.ReactNode;
  leftIconSize?: number;
  leftIconName?: 'back' | 'check' | 'close';
  leftIconColor?: Colors;
  leftIconOnPress?: () => void;
  title?: string | React.ReactNode;
  numberOfLineTitle?: number;
  titleColor?: Colors;
  right?: React.ReactNode;
  rightIconSize?: number;
  rightIconName?:
    | 'back'
    | 'check'
    | 'close'
    | 'ellipsis'
    | 'search'
    | 'dotHorizontalCircle'
    | 'plusIcon';
  rightIconColor?: Colors;
  rightIconOnPress?: () => void;
  contentType: 'view' | 'scrollView';
  bottom?: React.ReactNode;
  stickyBottom?: React.ReactNode;
  stickyBottomStyle?: { [key: string]: any };
  stickyBottomShadow?: boolean;
  showStickyBottom?: boolean;
  headerBordered?: boolean;
  headerStyle?: any;
  scrollViewBounce?: boolean;
  absoluteBottom?: boolean;
  additionalStyles?: any;
  showSystemToast?: boolean;
  showNotificationToast?: boolean;
  stickyTop?: React.ReactNode;
  stickyTopStyle?: { [key: string]: any };
  bgColorSpaceView?: Colors;
  children: React.ReactNode;
}

const SafeAreaContainer = (props: ISafeAreaViewProps) => {
  const [keyBoardVisible, setKeyBoardVisible] = useState<boolean>(false);

  const {
    backgroundColor = Colors.White,
    left,
    title,
    leftIconSize = IconSizes.small,
    leftIconName,
    leftIconColor = Colors.BlueGrey1000,
    leftIconOnPress,
    titleColor = Colors.BlueGrey1000,
    right,
    rightIconSize = IconSizes.small,
    rightIconName,
    rightIconColor = Colors.BlueGrey1000,
    rightIconOnPress,
    contentType = 'scrollView',
    headerStyle = {
      backgroundColor: Colors.White,
    },
    bottom,
    absoluteBottom = false,
    stickyBottom,
    headerBordered = false,
    additionalStyles = {},
    stickyBottomStyle = {},
    stickyTop,
    stickyTopStyle,
    stickyBottomShadow = false,
    showStickyBottom = true,
    bgColorSpaceView = Colors.White,
    numberOfLineTitle,
    children,
  } = props;

  const viewStyle = {
    backgroundColor: backgroundColor,
    ...styles.flex,
  };

  const showHeader = left || leftIconName || title || right || rightIconName;
  const ContentView = contentType === 'view' ? View : ScrollView;

  const getIconName = () => {
    let icon = null;
    switch (leftIconName) {
      case 'back': {
        icon = (
          <Icon
            name="arrow-back"
            size={IconSizes.x_small}
            color={Colors.Green600}
          />
        );
      }
    }
    return (
      <TouchableOpacity onPress={leftIconOnPress}>{icon}</TouchableOpacity>
    );
  };

  const borderedStyle = headerBordered
    ? {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.Background.GreyLight,
      }
    : {};

  const spaceViewHeight = stickyBottomStyle.marginBottom
    ? stickyBottomStyle.marginBottom
    : Platform.OS === 'android'
    ? hp(50)
    : hp(keyBoardVisible ? 30 : 50);

  return (
    <View style={[viewStyle, StyleSheet.absoluteFill]}>
      {showHeader && (
        <View
          style={{
            ...styles.flex_row,
            paddingHorizontal: wp(15),
            paddingVertical: hp(16),
            ...borderedStyle,
            ...headerStyle,
            justifyContent: 'space-between',
            alignContent: 'center',
          }}>
          <View
            style={[
              styles.flex,
              styles.jus_center,
              { width: leftIconName ? leftIconSize : undefined },
            ]}>
            {leftIconName ? getIconName() : left}
          </View>

          {/* Title */}
          <View
            style={{
              ...styles.flex_row,
              ...styles.flex,
              ...styles.jus_center,
              ...styles.alg_center,
            }}>
            <Text
              fontWeight="bold"
              type={'callout'}
              color={titleColor}
              numberOfLines={numberOfLineTitle}>
              {title}
            </Text>
          </View>

          {/* Right Icon */}
          <View style={{ width: rightIconName ? rightIconSize : undefined }}>
            {right && (
              <TouchableOpacity onPress={rightIconOnPress}>
                {right}
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
      {stickyTop && (
        <View
          style={{
            position: absoluteBottom ? 'absolute' : 'relative',
            opacity: 0.9,
            bottom: 0,
            width: '100%',
            elevation: 24,
            ...stickyTopStyle,
          }}>
          {stickyTop}
        </View>
      )}
      {/* Content View */}
      <ContentView
        keyboardShouldPersistTaps="handled"
        style={{ ...styles.flex, ...additionalStyles }}
        contentContainerStyle={{ flexGrow: 1, flex: 1 }}
        bounces={true}>
        {children}
        {bottom && (
          <View
            style={{
              position: absoluteBottom ? 'absolute' : 'relative',
              bottom: 0,
              ...styles.ph_default,
              width: '100%',
              marginBottom:
                Platform.OS === 'android'
                  ? hp(50)
                  : hp(keyBoardVisible ? 30 : 50),
            }}>
            {bottom}
          </View>
        )}
      </ContentView>
      {showStickyBottom && stickyBottom && (
        <View
          style={[
            {
              position: absoluteBottom ? 'absolute' : 'relative',
              bottom: 0,
              width: '100%',
              // marginBottom:
              //   Platform.OS === 'android'
              //     ? hp(30)
              //     : hp(keyBoardVisible ? 30 : 50),

              ...stickyBottomStyle,
            },
            stickyBottomShadow && {
              backgroundColor: Colors.White,
              shadowColor: Colors.Black,
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.9,
              shadowRadius: 16.0,
              elevation: 24,
            },
          ]}>
          {stickyBottom}
          <View
            style={{
              backgroundColor: bgColorSpaceView,
              marginBottom: -spaceViewHeight,
              height: spaceViewHeight,
            }}
          />
        </View>
      )}
    </View>
  );
};

export default SafeAreaContainer;
