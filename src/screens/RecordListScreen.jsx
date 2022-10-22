import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import firebase from 'firebase';

import RecordList from '../components/RecordList';
import CircleButton from '../components/CircleButton';

export default function RecordListScreen(props) {
  const { navigation } = props;
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const ref = db.collection('records').orderBy('updatedAt', 'desc');
    const unsubscribe = ref.onSnapshot((snapshot) => {
      const recordsList = [];
      snapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
        const data = doc.data();
        recordsList.push({
          id: doc.id,
          titleText: data.titleText,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
      setRecords(recordsList);
    }, (error) => {
      console.log(error);
      Alert.alert('データの読み込みに失敗しました');
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <RecordList records={records} />
      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('RecordCreate'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
