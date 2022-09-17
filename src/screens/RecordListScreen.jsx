import React from 'react';
import {
  View, StyleSheet, Alert,
} from 'react-native';

import AppBar from '../components/AppBar';
import RecordListItem from '../components/RecordListItem';
import CircleButton from '../components/CircleButton';

export default function RecordListScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <RecordListItem />
      <CircleButton name="plus" onPress={() => { Alert.alert('Pressed!'); }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
