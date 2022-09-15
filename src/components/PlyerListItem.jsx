import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PlayerListItem() {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemName}>name</Text>
      <Text style={styles.listItemCount}>合計プレイ数</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  listItemName: {
    fontSize: 20,
  },
  listItemCount: {
    fontSize: 14,
    color: '#848484',
  },
});
