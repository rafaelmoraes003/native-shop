import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { IProduct } from '../interfaces/IProduct';
import DropDown from './DropDown';

export default function ProductCard({ id, title, price, imgUrl }: IProduct) {
  const [isInLocalStorage, setIsInLocalStorage] = useState<boolean>(false);
  const [dropDownValue, setDropDownValue] = useState<number>(1);

  return (
    <View>
      <Image source={{ uri: imgUrl }} />
      <Text>{title}</Text>
      <Text>{`R$${price.toFixed(2).replace('.', ',')}`}</Text>
      <DropDown
        value={dropDownValue}
        setValue={setDropDownValue}
        enabled={!isInLocalStorage}
      />
      <Pressable>
        <Text>
          {isInLocalStorage ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
        </Text>
      </Pressable>
    </View>
  )
}