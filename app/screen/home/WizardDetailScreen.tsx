import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Divider } from 'react-native-elements';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import CardItem from './components/CardItem';
import DirectionIcon from './components/DirectionIcon';

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const WizardDetailScreen = (props: IProps) => {
  const { navigation } = props;

  const [shiftDetails, setShiftDetails] = useState<any>(null);

  const route: any = useRoute();

  useEffect(() => {
    setShiftDetails(route.params.shiftDetails);
  }, [route.params]);

  return (
    <SafeAreaContainer
      contentType="scrollView"
      title="Wizard Details"
      leftIconName="back"
      leftIconOnPress={() => navigation.goBack()}
      stickyTop={
        <View
          style={[
            styles.p_medium,
            {
              backgroundColor: Colors.Orange500,
            },
          ]}>
          <Text>
            Pick up at: &nbsp;
            <Text color={Colors.Text.Primary} fontWeight="bold">
              {shiftDetails?.pickUp.fullAddress}
            </Text>
          </Text>
        </View>
      }>
      <View style={[styles.p_medium]}>
        <View style={[styles.flex_row, styles.jus_around]}>
          <CardItem label="EST" value={`${shiftDetails?.travelDuration} min`} />
          <CardItem
            label="Distance"
            value={`${shiftDetails?.travelDistance} km`}
          />
          <CardItem label="Fare" value={`${5} min`} />
        </View>
        <PrimaryButton style={[styles.mt_small]} color={Colors.Yellow500}>
          DROP OFF
        </PrimaryButton>

        <Divider style={[styles.mv_12]} />
        <ScrollView>
          {shiftDetails?.directions?.length ? (
            shiftDetails?.directions?.map((one, index) => (
              <View
                key={index}
                style={[styles.flex_row, styles.alg_start, styles.mv_medium]}>
                <DirectionIcon direction={one.type} />
                <View
                  style={[
                    styles.flex_1,
                    {
                      borderColor: Colors.Black,
                    },
                  ]}>
                  <Text fontWeight="bold" type="footnote" numberOfLines={1}>
                    {one.text}
                  </Text>
                  <View style={[styles.mt_small, styles.flex_row]}>
                    <Text type="caption1">{one.travelDuration}</Text>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <Text>Not Direction</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaContainer>
  );
};

export default WizardDetailScreen;
