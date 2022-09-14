import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ListItem() {
  return (
    <View style={styles.listItem}>
      <View>
        <Text style={styles.listItemTitle}>カタン</Text>
        <Text style={styles.listItemDate}>2022年12月3日 10:00</Text>
      </View>
      <View>
        <Text>X</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  listItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  listItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
