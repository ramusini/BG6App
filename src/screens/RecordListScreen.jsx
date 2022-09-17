import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';

import RecordList from '../components/RecordList';
import CircleButton from '../components/CircleButton';

export default function RecordListScreen(props) {
  const { navigation } = props;
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
