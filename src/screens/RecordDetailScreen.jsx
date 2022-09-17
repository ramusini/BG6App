import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

import ItemPlayer from '../components/ItemPlayer';
import CircleButton from '../components/CircleButton';

export default function RecordDetailScreen(props) {
  // App.jsxでStack.Screenで囲まれたScreen達は自動的に『navigation』としてpropsに渡せるようになっている。
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemTitle}>カタン</Text>
        <Text style={styles.itemDate}>2022年12月4日 10:00</Text>
      </View>
      <ScrollView style={styles.itemBody}>
        <Text>ゲーム画像など</Text>
        <ItemPlayer />
        <Text style={styles.itemMemo}>メモ本文で、ここにはその時ルールをどう間違えたかや、エラッタの適用状況、拡張パックの適用状況を記載する。</Text>
      </ScrollView>
      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="edit-2"
        onPress={() => { navigation.navigate('RecordEdit'); }}
      />

      {/* 仮のモーダル。falseをtrueに変更すると、モーダルが出現する */}
      <View>
        <Modal isVisible={false}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Text>I am the modal content!</Text>
          </View>
        </Modal>
      </View>
      {/* 仮のモーダル */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
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
