import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { Avatar } from '../../../components/Avatar';
import { Text } from '../../../components/Text';
import { HomeStackRoute } from '../../../constants/constant';
import navigationService from '../../../navigation/navigation-service';
import { IRootState } from '../../../redux/root-store';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {
  newBookingData: any[];
}

interface IItemProps {
  label: string;
  value: number;
  iconName: string;
  onPress?: () => void;
}

const Item = (props: IItemProps) => {
  const { label, value, onPress, iconName } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.flex_col, styles.alg_center]}>
      <Icon name={iconName} size={IconSizes.x_small} color={Colors.Black} />
      <View style={[styles.mv_x_small]}>
        <Text fontWeight="bold" type="subhead">
          {value}
        </Text>
      </View>
      <Text color={Colors.Text.GreySecondary} type="caption2">
        {label}
      </Text>
    </TouchableOpacity>
  );
};
const StickyBottomSection = (props: IProps) => {
  const { newBookingData } = props;

  const { portalUser } = useSelector((state: IRootState) => ({
    portalUser: state.authStore.portalUser,
  }));

  const navigateToNewRequestListing = () => {
    navigationService.navigate(HomeStackRoute.NEW_REQUESTS, {});
  };

  return (
    <View style={[styles.p_medium]}>
      <Text fontWeight="bold" color={Colors.Orange400} type="subhead">
        EASY GO
      </Text>
      <View
        style={[
          styles.mv_small,
          styles.flex_row,
          styles.alg_center,
          styles.jus_between,
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
              {portalUser?.username}
            </Text>
            <View style={[styles.flex_row, styles.alg_center]}>
              <Text color={Colors.Text.GreySecondary} type="caption1">
                Basic level:
              </Text>
              <Rating
                readonly
                ratingColor={Colors.Orange400}
                style={[styles.ml_small]}
                type="star"
                ratingCount={portalUser?.rating}
                imageSize={15}
              />
            </View>
          </View>
        </View>
        <View style={[styles.flex_col, styles.alg_end, styles.flex_col]}>
          <Text type="caption1" color={Colors.Text.GreySecondary}>
            Số cuốc đã hoàn thành:{' '}
            <Text fontWeight="bold">{portalUser?.rideComplete}</Text> +
          </Text>
          <Text type="caption1" color={Colors.Text.GreySecondary}>
            Biển xe đăng ký:{' '}
            <Text fontWeight="bold">{portalUser?.licensePlate}</Text>
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.p_12,
          styles.rounded_small,
          styles.flex_row,
          styles.jus_around,
          styles.mt_small,
          styles.flex_wrap,
          {
            backgroundColor: Colors.Yellow300,
          },
        ]}>
        <Item
          iconName="clockcircleo"
          label="Số giờ đã hoạt động"
          value={10.2}
        />
        <Item
          iconName="dashboard"
          label="Khoảng cách đã di chuyển (KM)"
          value={30}
        />
        <Item
          iconName="exception1"
          label="Đơn hàng hiện có"
          value={newBookingData?.length}
          onPress={navigateToNewRequestListing}
        />
        <Item iconName="exception1" label="Số tiền đã kiếm được" value={20.0} />
      </View>
    </View>
  );
};

export default StickyBottomSection;
