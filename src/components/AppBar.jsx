import React from 'react';
import {
  View, Text, StyleSheet, Alert,
} from 'react-native';
import IconButton from './IconButton';

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <View style={styles.appBarInner}>
        <IconButton name="menu" style={{ left: 20 }} onPress={() => { Alert.alert('Pressed!'); }} />
        <Text style={styles.appBarTitle}>BG6 App</Text>
        <IconButton name="search" style={{ right: 20 }} onPress={() => { Alert.alert('Pressed!'); }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appBarInner: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appBarLeft: {
    left: 19,
    bottom: 12,
  },
  appBarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  appBarRight: {
    position: 'absolute',
    right: 19,
    bottom: 12,
  },
});
