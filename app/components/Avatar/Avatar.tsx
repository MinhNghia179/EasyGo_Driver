import React, { useState } from 'react';
import { View } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/AntDesign';
import { wp } from '../../services/response-screen-service';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';

interface Props extends FastImageProps {
  imageSize?: number;
  rounded?: boolean;
  position?: 'bottom-right' | 'bottom-left' | any;
  icon?: React.ReactNode;
  iconBackgroundColor?: Colors;
}

export const Avatar = (props: Props) => {
  const {
    imageSize,
    rounded,
    style,
    position,
    icon,
    iconBackgroundColor,
    ...rest
  } = props;

  const [loadError, setLoadError] = useState<boolean>(false);

  const renderIcon = () => {
    if (!icon) return;

    return (
      <View
        style={[
          styles.absolute,
          rounded ? styles.rounded_full : undefined,
          {
            backgroundColor: iconBackgroundColor
              ? iconBackgroundColor
              : Colors.White,

            left:
              position === 'bottom-right'
                ? wp(-2)
                : position === 'bottom-left'
                ? wp(25)
                : position,
            zIndex: 1,
            bottom: 0,
          },
        ]}>
        {icon}
      </View>
    );
  };

  if (loadError) {
    return (
      <View style={[styles.relative]}>
        <View
          style={[
            rounded ? styles.rounded_full : undefined,
            styles.alg_center,
            styles.jus_center,
            {
              width: wp(imageSize),
              height: wp(imageSize),
              backgroundColor: Colors.Grey100,
            },
          ]}>
          <Icon name="user" size={wp(imageSize / 2)} color={Colors.White} />
        </View>
        {renderIcon()}
      </View>
    );
  }

  return (
    <View style={[styles.relative]}>
      <FastImage
        style={[
          rounded ? styles.rounded_full : undefined,
          {
            width: wp(imageSize),
            height: wp(imageSize),
            borderColor: Colors.White,
            borderWidth: 1,
          },
          style,
        ]}
        resizeMode={FastImage.resizeMode.contain}
        {...rest}
        onError={() => setLoadError(true)}
      />
      {renderIcon()}
    </View>
  );
};
