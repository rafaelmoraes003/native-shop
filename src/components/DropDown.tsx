import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { DropDownProps } from '../interfaces/DropDownProps';

export default function DropDown({ value, setValue, enabled }: DropDownProps) {
  return (
    <Picker
      selectedValue={value}
      onValueChange={(itemValue) => setValue(itemValue)}
      enabled={enabled}
      style={{ width: '90%' }}
      dropdownIconColor={enabled ? '#808080' : '#7159C1'}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((opt) => (
        <Picker.Item label={String(opt)} value={opt} key={opt} />
      ))}
    </Picker>
  )
}