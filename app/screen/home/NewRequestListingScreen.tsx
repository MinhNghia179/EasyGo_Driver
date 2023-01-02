import React from 'react';
import { ScrollView, View } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { useSelector } from 'react-redux';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { HomeStackRoute } from '../../constants/constant';
import navigationService from '../../navigation/navigation-service';
import { IRootState } from '../../redux/root-store';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import ShiftsItem from './components/ShiftsItem';

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const NewRequestListingScreen = (props: IProps) => {
  const { navigation } = props;

  const { shiftDetails } = useSelector((state: IRootState) => ({
    shiftDetails: state.homeStore.shiftDetails,
  }));

  return (
    <SafeAreaContainer
      title="New Request"
      contentType="scrollView"
      leftIconName="back"
      stickyTop={
        <View
          style={[
            styles.p_medium,
            {
              backgroundColor: Colors.Orange500,
            },
          ]}>
          <Text fontWeight="bold" type="caption1">
            You have 10 new requests.
          </Text>
        </View>
      }
      leftIconOnPress={() => navigation.goBack()}>
      <ScrollView>
        <View style={[styles.p_medium]}>
          <ShiftsItem
            shiftDetails={shiftDetails}
            onNavigateShiftsDetail={() =>
              navigationService.navigate(HomeStackRoute.SHIFTS_ITEM_DETAIL, {
                shiftDetails,
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default NewRequestListingScreen;
