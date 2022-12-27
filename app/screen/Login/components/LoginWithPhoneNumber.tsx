import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import LinkButton from '../../../components/Button/LinkButton';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { Text } from '../../../components/Text';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';

interface IProps {
  onBack: () => void;
}

const LoginWithPhoneNumber = (props: IProps) => {
  const { onBack } = props;
  const [value, setValue] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVerifyOtpCode, setIsVerifyOtpCode] = useState<boolean>(false);
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef<PhoneInput>(null);

  const handleSendOtp = async () => {
    const checkValid = phoneInput.current?.isValidNumber(value);
    if (checkValid) {
      setIsError(true);
    } else {
      setIsVerifyOtpCode(true);
      setIsLoading(true);
      try {
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <Text type="callout">
        {isVerifyOtpCode ? 'Phone verification' : 'Hello, nice to meet you!'}
      </Text>
      <Text fontWeight="bold" type="body">
        {isVerifyOtpCode
          ? 'Enter your OTP code below'
          : 'Most comfort journey for you'}
      </Text>
      {isVerifyOtpCode ? (
        <OTPInputView pinCount={4} autoFocusOnLoad />
      ) : (
        <View style={[styles.mv_large]}>
          <Text type="subhead">Enter Your Mobile Number</Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="VN"
            layout="first"
            onChangeText={setValue}
            onChangeFormattedText={setFormattedValue}
            withDarkTheme
            withShadow
            autoFocus
          />
          {isError && <Text color={Colors.Red400}>Invalid phone number</Text>}
        </View>
      )}

      <PrimaryButton
        onPress={handleSendOtp}
        disable={isLoading || !formattedValue}
        color={Colors.Green600}>
        Send OTP
      </PrimaryButton>
      <View style={[styles.flex, styles.alg_center, styles.mv_medium]}>
        <LinkButton onPress={onBack} color={Colors.Grey700}>
          Back
        </LinkButton>
      </View>
    </>
  );
};

export default LoginWithPhoneNumber;
