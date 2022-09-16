import React from 'react';
import { View, StyleSheet } from 'react-native';

import ItemPlayerText from './ItemPlayerText';

export default function ItemPlayer() {
  return (
    <View>
      <View style={styles.itemPlayer}>
        <ItemPlayerText name="プレイヤー1" score="20" rank="3" />
      </View>
      <View style={styles.itemPlayer}>
        <ItemPlayerText name="プレイヤー2" score="10" rank="4" />
      </View>
      <View style={styles.itemPlayer}>
        <ItemPlayerText name="プレイヤー3" score="30" rank="2" />
      </View>
      <View style={styles.itemPlayer}>
        <ItemPlayerText name="プレイヤー4" score="40" rank="1" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemPlayer: {
    paddingVertical: 8,
  },
});
