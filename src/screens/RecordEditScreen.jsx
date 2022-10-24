import React, { useState } from 'react';
import {
  View, TextInput, Text, StyleSheet, Alert,
} from 'react-native';
import { shape, string } from 'prop-types';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';

export default function RecordEditScreen(props) {
  const { navigation, route } = props;
  const { id, titleText, bodyText } = route.params;
  const [title, setTitle] = useState(titleText);
  const [body, setBody] = useState(bodyText);

  // チェックボタンをクリックすると発動する処理
  function handlePress() {
    const db = firebase.firestore();
    const ref = db.collection('records').doc(id);
    // 上記で参照定義したrefの中身を変更する部分
    ref.set({
      titleText: title,
      bodyText: body,
      // {merge: true}については調べること。ref.setによって'records'の中身が入れ替わるが、これがあることで上に記載していないものはそのまま残るようになる。日付など
    }, { merge: true })
      // 変更が成功したら前の画面へ
      .then(() => {
        navigation.goBack();
      })
      // 失敗したらエラー
      .catch((error) => {
        Alert.alert(error.code);
      });
  }

  return (
    <View style={styles.container}>

      <View style={styles.inputHeader}>
        <TextInput
          value={title}
          style={styles.inputTitle}
          onChangeText={(text) => { setTitle(text); }}
        />
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

        <TextInput
          value={body}
          style={styles.inputMemo}
          onChangeText={(text) => { setBody(text); }}
        />
      </View>

      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="check-square"
        onPress={handlePress}
      />

    </View>
  );
}

RecordEditScreen.propTypes = {
  route: shape({
    params: shape({ id: string, titleText: string, bodyText: string }),
  }).isRequired,
};

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
