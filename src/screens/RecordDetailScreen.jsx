import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import ItemPlayer from '../components/ItemPlayer';
import CircleButton from '../components/CircleButton';

export default function RecordDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.itemHeader}>
        <Text style={styles.itemTitle}>カタン</Text>
        <Text style={styles.itemDate}>2022年12月4日 10:00</Text>
      </View>
      <ScrollView style={styles.itemBody}>
        <Text>ゲーム画像など</Text>
        <ItemPlayer />
        <Text style={styles.itemMemo}>メモ本文で、ここにはその時ルールをどう間違えたかや、エラッタの適用状況、拡張パックの適用状況を記載する。</Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: 'auto' }} name="edit-2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  itemHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  itemTitle: {
    color: '#ffffff',
    lineHeight: 32,
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  itemBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  itemMemo: {
    fontSize: 16,
    paddingVertical: 8,
  },
});
