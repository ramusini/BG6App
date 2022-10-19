import React, { useEffect } from 'react';
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

  useEffect(() => {
    const db = firebase.firestore();
    const ref = db.collection('records').orderBy('updatedAt', 'desc');
    const unsubscribe = ref.onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    }, (error) => {
      console.log(error);
      Alert.alert('データの読み込みに失敗しました');
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <RecordList />
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
