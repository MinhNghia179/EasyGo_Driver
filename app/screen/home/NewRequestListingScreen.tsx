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

  const { newBookingData } = useSelector((state: IRootState) => ({
    newBookingData: state.bookingStore.newBookingData,
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
            You have {newBookingData.length} new request
            {newBookingData.length !== 1 && 's'}.
          </Text>
        </View>
      }
      leftIconOnPress={() => navigation.goBack()}>
      <ScrollView>
        <View style={[styles.p_medium]}>
          {!newBookingData.length ? (
            <Text>
              There are currently no orders. Don't forget to open your active
              status to receive orders
            </Text>
          ) : (
            <>
              {newBookingData &&
                newBookingData.length &&
                newBookingData.map(one => {
                  return (
                    <ShiftsItem
                      key={one?.id}
                      shiftDetails={one}
                      onNavigateShiftsDetail={() =>
                        navigationService.navigate(
                          HomeStackRoute.SHIFTS_ITEM_DETAIL,
                          {
                            shiftDetails: one,
                          },
                        )
                      }
                    />
                  );
                })}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default NewRequestListingScreen;
