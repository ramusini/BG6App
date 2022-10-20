import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf } from 'prop-types';

export default function RecordList(props) {
  // ここはScreenではないため、navigationというpropsが渡ってこない？ため、useNavigationを利用。
  const { records } = props;
  const navigation = useNavigation();
  return (
    <View>
      {records.map((record) => (
        <TouchableOpacity
          // 一意のkeyを付与する必要がある
          key={record.id}
          style={styles.listItem}
          onPress={() => { navigation.navigate('RecordDetail'); }}
        >
          <View>
            <Text style={styles.listItemTitle}>{record.bodyText}</Text>
            <Text style={styles.listItemDate}>{String(record.updatedAt)}</Text>
          </View>
          <TouchableOpacity
            onPress={() => { Alert.alert('Are you sure?'); }}
            style={styles.recordDeleteIcon}
          >
            <Feather name="x" size={16} color="black" />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
}

RecordList.propTypes = {
  // arrayOfで配列であると定義
  records: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  listItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  listItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  recordDeleteIcon: {
    padding: 8,
  },
});
