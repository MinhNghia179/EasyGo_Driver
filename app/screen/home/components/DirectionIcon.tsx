import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {
  direction: string;
  color: Colors;
}

const DirectionIcon = (props: IProps) => {
  const { direction, color } = props;
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
    case 'UTurn': {
      iconName = 'rotate-ccw';
      break;
    }
    case 'DepartStart': {
      iconName = 'alert-circle';
      break;
    }
    case 'ArriveFinish': {
      iconName = 'anchor';
      break;
    }
    default: {
      iconName = 'crop';
    }
  }
  return (
    <View style={[styles.mh_small]}>
      <Icon name={iconName} size={IconSizes.x_small} color={color} />
    </View>
  );
};

export default DirectionIcon;
