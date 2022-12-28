import React from 'react';
import { View } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { Avatar } from '../../components/Avatar';
import GhostButton from '../../components/Button/GhostButton';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { HomeStackRoute } from '../../constants/constant';
import navigationService from '../../navigation/navigation-service';
import { wp } from '../../services/response-screen-service';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import CardItem from './components/CardItem';

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ShiftsItemDetail = (props: IProps) => {
  const { navigation } = props;

  return (
    <SafeAreaContainer
      leftIconName="back"
      contentType="scrollView"
      title="Shift Details"
      leftIconOnPress={() => navigation.goBack()}
      stickyBottom={
        <View style={[styles.p_medium, styles.bg_white]}>
          <PrimaryButton
            onPress={() =>
              navigationService.navigate(HomeStackRoute.WIZARD_DETAIL, {})
            }>
            see wizard details
          </PrimaryButton>
          <PrimaryButton style={[styles.mt_small]} color={Colors.Yellow500}>
            Accept
          </PrimaryButton>
        </View>
      }>
      <View style={[styles.p_medium, styles.flex_1]}>
        <View
          style={[
            styles.flex_row,
            styles.alg_center,
            styles.jus_between,
            styles.p_medium,
          ]}>
          <View style={[styles.flex_row]}>
            <Avatar
              style={[styles.rounded]}
              imageSize={wp(35)}
              source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
              position="bottom-left"
            />
            <View style={[styles.ml_small]}>
              <Text fontWeight="bold" type="subhead">
                Connie
              </Text>
            </View>
          </View>
          <View style={[styles.flex_col, styles.alg_end]}>
            <Text fontWeight="bold" type="subhead">
              $20.00
            </Text>
            <Text type="caption1" color={Colors.Text.GreySecondary}>
              2.2 km
            </Text>
          </View>
        </View>
        <CardItem label="PICK UP" value="68 cầu giấy" />
        <CardItem label="DROP OFF" value="219 trung kính" />
        <CardItem
          label="Notes"
          value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <Text type="footnote" color={Colors.Text.GreySecondary}>
          Trip Fare
        </Text>
        <View style={[styles.flex_row, styles.jus_between, styles.p_medium]}>
          <PrimaryButton color={Colors.Green} onPress={() => {}}>
            Call
          </PrimaryButton>
          <PrimaryButton onPress={() => {}}>Message</PrimaryButton>
          <GhostButton color={Colors.Grey500} onPress={() => {}}>
            Cancel
          </GhostButton>
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default ShiftsItemDetail;
