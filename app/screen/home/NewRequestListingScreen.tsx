import React from 'react';
import { ScrollView, View } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { SafeAreaContainer } from '../../components/View';
import styles from '../../styles/style-sheet';
import ShiftsItem from './components/ShiftsItem';

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const NewRequestListingScreen = (props: IProps) => {
  const { navigation } = props;

  return (
    <SafeAreaContainer
      title="New Request"
      contentType="scrollView"
      leftIconName="back"
      leftIconOnPress={() => navigation.goBack()}>
      <ScrollView>
        <View style={[styles.p_medium]}>
          <ShiftsItem />
          <ShiftsItem />
          <ShiftsItem />
          <ShiftsItem />
          <ShiftsItem />
          <ShiftsItem />
          <ShiftsItem />
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default NewRequestListingScreen;
