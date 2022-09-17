import React from 'react';
import { View, StyleSheet } from 'react-native';

import PlayerListItem from '../components/PlyerListItem';

export default function PlayerListScreen() {
  return (
    <View style={styles.container}>
      <PlayerListItem />
      <PlayerListItem />
      <PlayerListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
