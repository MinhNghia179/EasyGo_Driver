import React, { useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import FormLogin from './components/FormLogin';
import LoginWithPhoneNumber from './components/LoginWithPhoneNumber';

const LoginScreen = () => {
  const [isLoginWithMobilePhone, setIsLoginWithMobilePhone] =
    useState<boolean>(false);

  return (
    <SafeAreaContainer contentType="scrollView">
      <ImageBackground
        source={{
          uri: 'https://media.istockphoto.com/id/165792741/vi/vec-to/b%E1%BA%A3n-%C4%91%E1%BB%93-th%C3%A0nh-ph%E1%BB%91-tr%E1%BB%ABu-t%C6%B0%E1%BB%A3ng.jpg?s=612x612&w=is&k=20&c=1b8cNO9_WIesjxFlensz2nm_pMt1j0HMp6ju5rv9GUg=',
        }}
        resizeMode="cover"
        style={[
          {
            flex: 1,
          },
        ]}>
        <View
          style={[
            styles.p_medium,
            styles.flex_col,
            styles.jus_evenly,
            {
              flex: 1,
            },
          ]}>
          <Text
            type="headline"
            fontWeight="bold"
            textAlign="center"
            color={Colors.Blue600}>
            EASY GO - DRIVER
          </Text>

          <View style={[styles.bg_white, styles.p_large, styles.rounded]}>
            {isLoginWithMobilePhone ? (
              <LoginWithPhoneNumber
                onBack={() => setIsLoginWithMobilePhone(false)}
              />
            ) : (
              <FormLogin
                onSelectLoginWithPhoneNumber={() =>
                  setIsLoginWithMobilePhone(true)
                }
              />
            )}
            <View style={[styles.flex, styles.alg_center, styles.mt_large]}>
              <Text type="footnote" textAlign="center">
                By creating an account, you agree to our Terms of Service and
                Privacy Policy
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaContainer>
  );
};

export default LoginScreen;
