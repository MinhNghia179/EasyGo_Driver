import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PrimaryButton from '../../components/Button/PrimaryButton';
import InputText from '../../components/Input/InputText';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { LoginStackRoute } from '../../constants/constant';
import navigationService from '../../navigation/navigation-service';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';

const ForgotPassword = () => {
  const [emailAddress, setEmailAddress] = useState<string>('');

  return (
    <SafeAreaContainer
      contentType="scrollView"
      leftIconName="back"
      leftIconOnPress={() => {
        navigationService.navigate(LoginStackRoute.LOGIN, {});
      }}
      backgroundColor={Colors.BlueGrey100}
      title="Reset Password">
      <View style={[styles.p_medium]}>
        <Text fontWeight="bold" type="callout">
          Enter your email address
        </Text>
        <View style={[styles.mv_medium]}>
          <InputText
            placeholder="Email address"
            value={emailAddress}
            onChange={setEmailAddress}
            leftIcon={<Icon name="email" size={IconSizes.x_small} />}
          />
        </View>
        <PrimaryButton color={Colors.Green700}>Send</PrimaryButton>
      </View>
    </SafeAreaContainer>
  );
};

export default ForgotPassword;
