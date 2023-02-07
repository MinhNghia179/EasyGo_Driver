import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Avatar } from '../../../components/Avatar';
import { Text } from '../../../components/Text';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';
import { numberWithCommas } from '../../../utils/constant';
import CardItem from './CardItem';

interface IProps {
  onNavigateShiftsDetail?: () => void;
  shiftDetails: any;
}

const ShiftsItem = (props: IProps) => {
  const { onNavigateShiftsDetail, shiftDetails } = props;

  return (
    <TouchableOpacity onPress={onNavigateShiftsDetail}>
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
        <View
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
                {shiftDetails?.userName}
              </Text>
            </View>
          </View>
          <View style={[styles.flex_col, styles.alg_end]}>
            <Text fontWeight="bold" type="subhead">
              $ {numberWithCommas(shiftDetails?.totalPrice)}
            </Text>
          </View>
        </View>
        <View style={[styles.p_medium]}>
          <CardItem
            label="Điểm xuất phát"
            value={shiftDetails?.nameStartPoint}
          />
          <CardItem label="Điểm đến" value={shiftDetails?.nameEndPoint} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShiftsItem;
