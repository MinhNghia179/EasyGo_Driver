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
import { getDirectionByCoordinates } from '../../services/google-map-service';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import CardItem from './components/CardItem';
import DirectionIcon from './components/DirectionIcon';

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const WizardDetailScreen = (props: IProps) => {
  const { navigation } = props;

  const [directionDetails, setDirectionDetails] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchDirectionByCoordinates = async () => {
    setIsLoading(true);
    try {
      const response = await getDirectionByCoordinates({
        pickup: {
          latitude: 21.03115664314368,
          longitude: 105.80103309853264,
        },
        dropOff: {
          latitude: 21.016335204145918,
          longitude: 105.80485835828965,
        },
      });
      setDirectionDetails(response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDirectionByCoordinates();
  }, []);

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
              7958 Swift Village
            </Text>
          </Text>
        </View>
      }>
      <View style={[styles.p_medium]}>
        <View style={[styles.flex_row, styles.jus_around]}>
          <CardItem label="EST" value={`${5} min`} />
          <CardItem label="Distance" value={`${5} min`} />
          <CardItem label="Fare" value={`${5} min`} />
        </View>
        <PrimaryButton style={[styles.mt_small]} color={Colors.Yellow500}>
          DROP OFF
        </PrimaryButton>
        <Divider style={[styles.mv_12]} />
        <ScrollView>
          {directionDetails.length ? (
            directionDetails.map(one => (
              <View
                style={[styles.flex_row, styles.alg_start, styles.mv_medium]}>
                <DirectionIcon direction={one.type} />
                <View
                  style={[
                    styles.bb_small,
                    styles.flex_1,
                    {
                      borderColor: Colors.Black,
                    },
                  ]}>
                  <Text fontWeight="bold" type="footnote" numberOfLines={1}>
                    {one.text}
                  </Text>
                  <View style={[styles.mt_small]}>
                    <Text type="caption1">18m</Text>
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
