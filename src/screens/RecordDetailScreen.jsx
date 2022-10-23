import React, { useEffect, useState } from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import { shape, string } from 'prop-types';

import firebase from 'firebase';

import ItemPlayer from '../components/ItemPlayer';
import CircleButton from '../components/CircleButton';
import { dateToString } from '../utils';

export default function RecordDetailScreen(props) {
  // App.jsxでStack.Screenで囲まれたScreen達は自動的に『navigation』としてpropsに渡せるようになっている。
  // routeはnavigationと同じく全てのスクリーンで受け取ることができる。routeの中にparamsがあり、今回はparamsの中にidが入っている。
  const { navigation, route } = props;
  const { id } = route.params;
  const [record, setRecord] = useState(null);

  useEffect(() => {
    // firebaseからデータを取得
    const db = firebase.firestore();
    // 取得データから参照データを作成
    const ref = db.collection('records').doc(id);
    ref.onSnapshot((doc) => {
      // コンソールで取得データを確認できる
      console.log(doc.id, doc.data());
      // データを定義
      const data = doc.data();
      // データを一時的にRecordDetailScreenに保存。上記のuseStateで実行している。
      setRecord({
        id: doc.id,
        titleText: data.titleText,
        bodyText: data.bodyText,
        updatedAt: data.updatedAt.toDate(),
      });
    });
  }, []);
  // 最後の空の配列[]は、画面が表示されたその瞬間だけ実行されるようにするため。

  return (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        {/* 以下の{record && record.~~}は、recordに該当データが入っていなかった場合でもエラーにならず空白を返してくれる。 */}
        <Text style={styles.itemTitle}>{record && record.titleText}</Text>
        <Text style={styles.itemDate}>{record && dateToString(record.updatedAt)}</Text>
      </View>
      <ScrollView style={styles.itemBody}>
        <Text>画像など</Text>
        <ItemPlayer />
        <Text style={styles.itemMemo}>{record && record.bodyText}</Text>
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

RecordDetailScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

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
