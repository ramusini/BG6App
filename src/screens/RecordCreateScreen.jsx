import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import firebase from 'firebase';

import CircleButton from '../components/CircleButton';

export default function RecordCreateScreen(props) {
  const { navigation } = props;

  function hundlePress() {
    const db = firebase.firestore();
    const ref = db.collection('memos');
    ref.add({
      bodyText: 'Hello',
    })
      .then((docRef) => {
        console.log('Created!', docRef.id);
        navigation.goBack();
      }) // 成功したとき
      .catch((error) => {
        console.log('Error!', error);
      });// 失敗したとき
  }

  return (
    <View style={styles.container}>
      <View style={styles.createHeader}>
        <Text style={styles.createSearchForm}>
          検索フォーム
          <Feather name="search" size={24} color="black" />
        </Text>
      </View>
      <View style={styles.createBody}>
        <Text style={styles.createSearchResult}>検索結果</Text>
      </View>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput value="" multiline style={styles.input} />
        </View>
        <CircleButton
          name="check"
          onPress={hundlePress}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  input: {
    backgroundColor: 'blue',
    flex: 1,
  },
  createHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  createSearchForm: {
    backgroundColor: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  createBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    alignItems: 'center',
  },
});
