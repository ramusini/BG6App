import React from 'react';
import { View, StyleSheet } from 'react-native';

import ItemPlayerText from './ItemPlayerText';

export default function ItemPlayer() {
  return (
    <View style={styles.itemPlayer}>
      <ItemPlayerText>プレイヤー1 20p 2位</ItemPlayerText>
      <ItemPlayerText>プレイヤー1 20p 2位</ItemPlayerText>
      <ItemPlayerText>プレイヤー1 20p 2位</ItemPlayerText>
      <ItemPlayerText>プレイヤー1 20p 2位</ItemPlayerText>
    </View>
  );
}

const styles = StyleSheet.create({
  itemPlayer: {
    paddingVertical: 16,
  },
});
