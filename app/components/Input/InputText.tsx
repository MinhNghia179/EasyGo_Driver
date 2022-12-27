import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import { Text } from '../Text';
import _ from 'lodash';

import Icon from 'react-native-vector-icons/AntDesign';
import IconSizes from '../../styles/icon-size';
import { hp } from '../../services/response-screen-service';

interface IProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  maxLength?: number;
  backgroundColor?: Colors;
  style?: object;
  value?: string;
  placeholder?: string;
  numberOfLines?: number;
  disabled?: boolean;
  isValid?: boolean;
  borderColor?: string;
  autoFocus?: boolean;
  showErrorMessage?: boolean;
  errorMessage?: string[];
  label?: string;
  isRequired?: boolean;
  inputHeight?: number;
  multiline?: boolean;
  onPressRightIcon?: () => void;
  autoCompleteType?:
    | 'name'
    | 'username'
    | 'password'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-number'
    | 'email'
    | 'postal-code'
    | 'street-address'
    | 'tel'
    | 'off';
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  onChange?: (value: string) => void;
}

const InputText = (props: IProps) => {
  const {
    leftIcon,
    rightIcon,
    maxLength,
    backgroundColor,
    style,
    value,
    placeholder,
    numberOfLines,
    disabled,
    isValid = true,
    borderColor,
    autoFocus,
    autoCapitalize = 'none',
    keyboardType = 'default',
    autoCompleteType,
    showErrorMessage,
    errorMessage,
    isRequired,
    label,
    onPressRightIcon,
    inputHeight,
    multiline,
    onChange,
  } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const inputBorderColor: string =
    borderColor || (!isValid && !isFocused)
      ? Colors.Red600
      : isFocused
      ? Colors.Blue400
      : Colors.BlueGrey200;

  return (
    <View style={[style]}>
      {label && (
        <Text color={Colors.Text.Primary} fontWeight="bold" type="footnote">
          {label} {!isRequired && '*'}
        </Text>
      )}

      <View
        style={[
          styles.flex,
          styles.flex_row,
          styles.alg_center,
          styles.jus_between,
          multiline ? styles.alg_start : styles.alg_center,
          {
            borderWidth: 1,
            borderRadius: 6,
            borderColor: inputBorderColor,
            backgroundColor: backgroundColor ?? Colors.White,
            overflow: 'hidden',
            height: !multiline ? null : hp(inputHeight),
          },
        ]}>
        {!!leftIcon && (
          <View style={[styles.ml_x_small, styles.absolute]}>{leftIcon}</View>
        )}

        <TextInput
          multiline={multiline}
          maxLength={maxLength}
          textAlignVertical={multiline ? 'top' : null}
          value={value}
          style={[!!leftIcon ? styles.pl_x_large : styles.p_12]}
          editable={!disabled}
          placeholder={placeholder || ''}
          defaultValue={value || ''}
          numberOfLines={numberOfLines}
          onChangeText={text => onChange(text)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoFocus={autoFocus}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoComplete={autoCompleteType}
        />

        {!!rightIcon && (
          <TouchableOpacity
            onPress={onPressRightIcon}
            style={[styles.mr_small]}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>

      {!isValid && showErrorMessage && (
        <View style={[styles.flex, styles.flex_col]}>
          {errorMessage.length &&
            errorMessage.map((one, index) => (
              <View
                key={index}
                style={[
                  styles.pv_x_small,
                  styles.flex,
                  styles.flex_row,
                  styles.alg_center,
                ]}>
                <Icon
                  name="exclamationcircleo"
                  color={Colors.Red500}
                  size={IconSizes.x3_small}
                  style={[styles.mr_x_small]}
                />
                <Text color={Colors.Red500} type="caption1">
                  {one}
                </Text>
              </View>
            ))}
        </View>
      )}
    </View>
  );
};

export default InputText;
