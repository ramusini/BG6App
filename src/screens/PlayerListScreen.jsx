import React from 'react';
import { View } from 'react-native';

import AppBar from '../components/AppBar';
import PlayerListItem from '../components/PlyerListItem';

export default function PlayerListScreen() {
  return (
    <View>
      <AppBar />
      <PlayerListItem />
      <PlayerListItem />
      <PlayerListItem />
    </View>
  );
}
