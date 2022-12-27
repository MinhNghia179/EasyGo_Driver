import React from 'react';
import { View } from 'react-native';
import { Button, ButtonProps } from 'react-native-elements';
import { Colors } from '../../styles/colors';

interface IProps extends ButtonProps {
  onPress?: () => void;
  color?: string;
  style?: any;
  children?: React.ReactElement | string;
  disable?: boolean;
  loading?: boolean;
}

const SecondaryButton = (props: IProps) => {
  const { onPress, color, children, style, disable, loading } = props;

  return (
    <View style={[style]}>
      <Button
        disabled={disable}
        type="outline"
        title={children}
        onPress={onPress}
        loading={loading}
        titleStyle={{
          color: color ? color : Colors.Blue600,
        }}
        buttonStyle={{
          borderColor: color ? color : Colors.Blue600,
        }}
      />
    </View>
  );
};

export default SecondaryButton;
