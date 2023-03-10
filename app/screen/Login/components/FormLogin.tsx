import React, { useState } from 'react';
import { View } from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import LinkButton from '../../../components/Button/LinkButton';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import InputText from '../../../components/Input/InputText';
import { Text } from '../../../components/Text';
import { HomeStackRoute, LoginStackRoute } from '../../../constants/constant';
import navigationService from '../../../navigation/navigation-service';
import { IRootDispatch, IRootState } from '../../../redux/root-store';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {
  onSelectLoginWithPhoneNumber: () => void;
}

const horizontalStyles = {
  height: 1,
  elevation: 2,
  backgroundColor: '#AAAAAA',
  width: '40%',
};

const FormLogin = (props: IProps) => {
  const { onSelectLoginWithPhoneNumber } = props;

  const dispatch = useDispatch<IRootDispatch>();

  const { portalUser, socket } = useSelector((state: IRootState) => ({
    portalUser: state.authStore.portalUser,
    socket: state.authStore.socket,
  }));

  const [emailAddress, setEmailAddress] = useState<string>('vinh@gmail.com');
  const [password, setPassword] = useState<string>('123456789');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigateToForgotPassWord = () => {
    navigationService.navigate(LoginStackRoute.FORGOT_PASSWORD, {});
  };

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      await dispatch.authStore.doSignIn({ email: emailAddress, password });
      navigationService.navigate(HomeStackRoute.DASHBOARD, {});
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Lỗi!',
        textBody: 'Rất tiếc, đã xảy ra lỗi! Vui lòng thử lại.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PrimaryButton
        color={Colors.Orange500}
        disable={isLoading}
        onPress={onSelectLoginWithPhoneNumber}>
        Đăng nhập bằng số di động
      </PrimaryButton>

      <View
        style={[
          styles.flex_row,
          styles.alg_center,
          styles.jus_around,
          styles.mv_large,
        ]}>
        <View style={[styles.mv_small, horizontalStyles]}></View>
        <Text type="subhead">OR</Text>
        <View style={[styles.mv_small, horizontalStyles]}></View>
      </View>

      <View style={[styles.flex_col, styles.jus_center]}>
        <InputText
          placeholder="Email address"
          value={emailAddress}
          onChange={setEmailAddress}
          leftIcon={<Icon name="email" size={IconSizes.x_small} />}
        />
        <View style={[styles.mv_medium]}>
          <InputText
            placeholder="Password"
            value={password}
            onChange={setPassword}
            leftIcon={<Icon name="lock" size={IconSizes.x_small} />}
          />
        </View>
        <PrimaryButton
          color={Colors.Orange500}
          loading={isLoading}
          onPress={onSubmit}>
          Đăng nhập
        </PrimaryButton>
        <View style={[styles.flex, styles.alg_center, styles.mv_large]}>
          <LinkButton
            type="footnote"
            color={Colors.Grey500}
            onPress={navigateToForgotPassWord}>
            Quên mật khẩu?
          </LinkButton>
        </View>
      </View>
    </>
  );
};

export default FormLogin;
