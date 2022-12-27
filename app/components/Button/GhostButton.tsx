import React from 'react';
import { View } from 'react-native';
import { Button, ButtonProps } from 'react-native-elements';
import { Colors } from '../../styles/colors';

interface IProps extends ButtonProps {
  onPress?: () => void;
  style?: any;
  disabled?: boolean;
  loading?: boolean;
  color?: Colors;
  children?: React.ReactElement | string;
}

const GhostButton = (props: IProps) => {
  const { onPress, children, style, disabled, color, loading } = props;

  const colorStyle = color ? color : Colors.Text.GreySecondary;

  return (
    <View style={[style]}>
      <Button
        disabled={disabled}
        type="outline"
        title={children}
        onPress={onPress}
        loading={loading}
        titleStyle={{
          color: colorStyle,
        }}
        buttonStyle={{}}
      />
    </View>
  );
};

export default GhostButton;
