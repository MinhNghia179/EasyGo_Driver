import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {
  direction: 'TurnRight' | 'TurnLeft';
}

const DirectionIcon = (props: IProps) => {
  const { direction } = props;
  let iconName = '';

  switch (direction) {
    case 'TurnRight': {
      iconName = 'corner-up-right';
      break;
    }
    case 'TurnLeft': {
      iconName = 'corner-up-left';
      break;
    }
  }
  return (
    <View style={[styles.mh_small]}>
      <Icon name={iconName} size={IconSizes.x_small} color={Colors.Black} />
    </View>
  );
};

export default DirectionIcon;