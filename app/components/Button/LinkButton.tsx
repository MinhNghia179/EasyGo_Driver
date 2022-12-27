import React from 'react';
import { Colors } from '../../styles/colors';
import { Text } from '../Text';

interface IProps {
  children?: React.ReactElement | string;
  style?: any;
  disable?: boolean;
  underline?: boolean;
  onPress?: () => void;
  color?: Colors;
  type?:
    | 'headline'
    | 'body'
    | 'callout'
    | 'subhead'
    | 'footnote'
    | 'caption1'
    | 'caption2';
}

const LinkButton = (props: IProps) => {
  const {
    onPress,
    children,
    style,
    disable,
    underline,
    type = 'subhead',
    color = Colors.Blue600,
  } = props;

  return (
    <Text
      {...(!disable && { onPress: onPress })}
      {...(underline && { textDecorationLine: 'underline' })}
      color={disable ? Colors.Text.GreySecondary : color}
      type={type}
      style={{ ...style }}>
      {children}
    </Text>
  );
};

export default LinkButton;
