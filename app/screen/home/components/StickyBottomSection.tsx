import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { Avatar } from '../../../components/Avatar';
import { Text } from '../../../components/Text';
import { IRootState } from '../../../redux/root-store';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {}

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
  const { portalUser } = useSelector((state: IRootState) => ({
    portalUser: state.authStore.portalUser,
  }));

  return (
    <View style={[styles.p_medium]}>
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
            <Text color={Colors.Text.GreySecondary} type="footnote">
              Basic level
            </Text>
          </View>
        </View>
        <View style={[styles.flex_col, styles.alg_end]}>
          <Text fontWeight="bold" type="subhead">
            $20.00
          </Text>
          <Text>Earned</Text>
        </View>
      </View>
      <View
        style={[
          styles.p_12,
          styles.rounded_small,
          styles.flex_row,
          styles.alg_center,
          styles.jus_around,
          {
            backgroundColor: Colors.Yellow300,
          },
        ]}>
        <Item iconName="clockcircleo" label="HOURS ONLINE" value={10.2} />
        <Item iconName="dashboard" label="TOTAL DISTANCE (KM)" value={30} />
        <Item iconName="exception1" label="TOTAL JOBS" value={20} />
      </View>
    </View>
  );
};

export default StickyBottomSection;
