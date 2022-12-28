import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Avatar } from '../../../components/Avatar';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import SecondaryButton from '../../../components/Button/SecondaryButton';
import { Text } from '../../../components/Text';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';
import CardItem from './CardItem';

interface IProps {
  onNavigateShiftsDetail?: () => void;
}

const ShiftsItem = (props: IProps) => {
  const { onNavigateShiftsDetail } = props;

  return (
    <View
      style={[
        styles.mb_large,
        styles.b_small,
        {
          borderRadius: 8,
          borderColor: Colors.Grey100,
          backgroundColor: Colors.White,
        },
      ]}>
      <TouchableOpacity
        onPress={onNavigateShiftsDetail}
        style={[
          styles.flex_row,
          styles.alg_center,
          styles.jus_between,
          styles.p_medium,
          {
            backgroundColor: Colors.Grey000,
          },
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
      </TouchableOpacity>
      <View style={[styles.p_medium]}>
        <CardItem label="PICK UP" value="68 cầu giấy" />
        <CardItem label="DROP OFF" value="219 trung kính" />
        <View style={[styles.flex_row, styles.jus_end]}>
          <SecondaryButton color={Colors.Text.GreySecondary} onPress={() => {}}>
            Ignore
          </SecondaryButton>
          <PrimaryButton
            style={[styles.ml_small]}
            color={Colors.Yellow400}
            onPress={() => {}}>
            Accept
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default ShiftsItem;
