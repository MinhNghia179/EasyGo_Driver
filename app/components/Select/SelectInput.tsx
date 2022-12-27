import React, { ReactElement, useRef, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';
import { ActionModal } from '../Modal';
import { Text } from '../Text';

interface IProps {
  label?: string;
  height?: number;
  data?: Array<any>;
  onSelect?: (value) => void;
}

const SelectInput = (props: IProps) => {
  const DropdownButton: any = useRef();

  const { height = 40, label, data, onSelect } = props;

  const [visible, setVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState(undefined);

  const onItemPress = item => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderDropDown = (): ReactElement => {
    return (
      <ActionModal isVisible={visible} onClose={() => setVisible(false)}>
        <TouchableOpacity
          style={[styles.full]}
          onPress={() => setVisible(false)}>
          <View
            style={[
              styles.absolute,
              styles.full_width,
              {
                backgroundColor: Colors.White,
              },
            ]}>
            <FlatList
              data={data}
              renderItem={(item: any) => (
                <TouchableOpacity onPress={onItemPress}>
                  {item.label}
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </ActionModal>
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      ref={DropdownButton}
      onPress={() => setVisible(!visible)}
      style={[
        styles.flex,
        styles.flex_row,
        styles.alg_center,
        styles.ph_small,
        styles.jus_between,
        {
          backgroundColor: Colors.Grey000,
          zIndex: 1,
          height: height,
        },
      ]}>
      {renderDropDown()}
      <Text>{(selected && selected.label) || label}</Text>
      <Icon
        name={visible ? 'chevron-up' : 'chevron-down'}
        size={IconSizes.x_small}
      />
    </TouchableOpacity>
  );
};

export default SelectInput;
