import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import ListItem from '../components/ListItem';
import CircleButton from '../components/CircleButton';

export default function ListItemScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <ListItem />
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
