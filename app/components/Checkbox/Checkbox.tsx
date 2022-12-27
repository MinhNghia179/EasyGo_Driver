import React from 'react';
import { View } from 'react-native';
import { CheckBox, CheckBoxProps } from 'react-native-elements';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import { Text } from '../Text';

interface IProps extends CheckBoxProps {
  backgroundColor?: Colors;
  border?: boolean;
  label?: string;
  iconRight?: boolean;
}

const Checkbox = (props: IProps) => {
  const { backgroundColor, border, label, iconRight, ...rest } = props;

  return (
    <CheckBox
      {...rest}
      title={
        <View style={[iconRight ? styles.mr_small : styles.ml_small]}>
          <Text type="footnote" color={Colors.Text.Primary} textAlign="auto">
            {label}
          </Text>
        </View>
      }
      containerStyle={{
        backgroundColor: backgroundColor ? backgroundColor : Colors.White,
        borderWidth: border ? 1 : 0,
      }}
      iconRight={iconRight}
      activeOpacity={1}
    />
  );
};

export default Checkbox;
