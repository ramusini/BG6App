import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function RecordCreateScreen() {
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
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
