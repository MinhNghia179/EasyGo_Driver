import React from 'react';
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
          <View style={[styles.flex_row, styles.alg_start, styles.mv_medium]}>
            <DirectionIcon direction="TurnLeft" />
            <View
              style={[
                styles.bb_small,
                styles.flex_1,
                {
                  borderColor: Colors.Black,
                },
              ]}>
              <Text fontWeight="bold" type="footnote" numberOfLines={1}>
                Head southwest on Madison St
              </Text>
              <View style={[styles.mt_small]}>
                <Text type="caption1">18m</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaContainer>
  );
};

export default WizardDetailScreen;
