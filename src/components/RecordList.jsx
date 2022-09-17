import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function RecordList() {
  // ここはScreenではないため、navigationというpropsが渡ってこない？ため、useNavigationを利用。
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => { navigation.navigate('RecordDetail'); }}
      >
        <View>
          <Text style={styles.listItemTitle}>カタン</Text>
          <Text style={styles.listItemDate}>2022年12月3日 10:00</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('Are you sure?'); }}
          style={styles.recordDeleteIcon}
        >
          <Feather name="x" size={16} color="black" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listItem}
        onPress={() => { navigation.navigate('RecordDetail'); }}
      >
        <View>
          <Text style={styles.listItemTitle}>カルカソンヌ</Text>
          <Text style={styles.listItemDate}>2022年12月3日 10:00</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('Are you sure?'); }}
          style={styles.recordDeleteIcon}
        >
          <Feather name="x" size={16} color="black" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listItem}
        onPress={() => { navigation.navigate('RecordDetail'); }}
      >
        <View>
          <Text style={styles.listItemTitle}>オーディンの祝祭</Text>
          <Text style={styles.listItemDate}>2022年12月3日 10:00</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('Are you sure?'); }}
          style={styles.recordDeleteIcon}
        >
          <Feather name="x" size={16} color="black" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

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
