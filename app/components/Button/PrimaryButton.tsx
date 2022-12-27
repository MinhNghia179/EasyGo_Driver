import React from 'react';
import { View } from 'react-native';
import { Button, ButtonProps } from 'react-native-elements';
import { IconNode } from 'react-native-elements/dist/icons/Icon';
import { Colors } from '../../styles/colors';

interface IProps extends ButtonProps {
  onPress?: () => void;
  color?: string;
  icon?: IconNode;
  style?: Object;
  children?: React.ReactElement | string;
  disable?: boolean;
  loading?: boolean;
}

const PrimaryButton = (props: IProps) => {
  const { onPress, color, children, style, disable, loading, icon, ...other } =
    props;

  return (
    <View
      style={[
        style,
        {
          overflow: 'hidden',
        },
      ]}>
      <Button
        type="solid"
        title={children}
        icon={icon}
        buttonStyle={{
          backgroundColor: color ? color : Colors.Blue600,
          borderColor: 'transparent',
        }}
        onPress={onPress}
        disabled={disable}
        loading={loading}
        titleStyle={{
          color: Colors.White,
        }}
        {...other}
      />
    </View>
  );
};

export default PrimaryButton;
