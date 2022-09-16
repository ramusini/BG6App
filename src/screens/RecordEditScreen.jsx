import React from 'react';
import {
  View, TextInput, Text, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function RecordEditScreen() {
  return (
    <View style={styles.container}>
      <AppBar />

      <View style={styles.inputHeader}>
        <TextInput value="カタン" style={styles.inputTitle} />
        <TextInput value="2022年10月20日 10:00" style={styles.inputDate} />
      </View>

      <View style={styles.inputBody}>
        <Text>画像</Text>
        <View style={styles.inputPlayer}>
          <TextInput value="プレイヤー1" style={styles.inputPlayerName} />
          <TextInput value="20p" style={styles.inputPlayerScore} />
        </View>
        <View style={styles.inputPlayer}>
          <TextInput value="プレイヤー2" style={styles.inputPlayerName} />
          <TextInput value="20p" style={styles.inputPlayerScore} />
        </View>
        <View style={styles.inputPlayer}>
          <TextInput value="プレイヤー3" style={styles.inputPlayerName} />
          <TextInput value="20p" style={styles.inputPlayerScore} />
        </View>
        <View style={styles.inputPlayer}>
          <TextInput value="プレイヤー4" style={styles.inputPlayerName} />
          <TextInput value="20p" style={styles.inputPlayerScore} />
        </View>

        <TextInput value="メモ本文が入る" style={styles.inputMemo} />
      </View>

      <CircleButton style={{ top: 160, bottom: 'auto' }} name="check-square" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inputHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  inputTitle: {
    color: '#ffffff',
    lineHeight: 32,
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputDate: {
    color: '#ffffff',
    fontSize: 20,
    paddingTop: 10,
  },
  inputBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  inputPlayer: {
    flexDirection: 'row',
    paddingTop: 5,
    justifyContent: 'space-between',
  },
  inputPlayerName: {
    fontSize: 16,
  },
  inputPlayerScore: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
  inputMemo: {
    fontSize: 16,
    paddingTop: 10,
  },
});
