import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  shape,
  string,
  instanceOf,
  arrayOf,
} from 'prop-types';

export default function RecordList(props) {
  // ここはScreenではないため、navigationというpropsが渡ってこない？ため、useNavigationを利用。
  const { records } = props;
  const navigation = useNavigation();

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        // 一意のkeyを付与する必要がある
        key={item.id}
        style={styles.listItem}
        onPress={() => { navigation.navigate('RecordDetail'); }}
      >
        <View>
          <Text style={styles.listItemTitle} numberOfLines={1}>{item.bodyText}</Text>
          <Text style={styles.listItemDate}>{String(item.updatedAt)}</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('Are you sure?'); }}
          style={styles.recordDeleteIcon}
        >
          <Feather name="x" size={16} color="black" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={records}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
  container: {
    flex: 1,
  },
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
