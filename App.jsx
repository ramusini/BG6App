import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';

import RecordListScreen from './src/screens/RecordListScreen';
import RecordDetailScreen from './src/screens/RecordDetailScreen';
import PlayerListScreen from './src/screens/PlayerListScreen';
import RecordEditScreen from './src/screens/RecordEditScreen';
import RecordCreateScreen from './src/screens/RecordCreateScreen';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: 'AIzaSyAQWyxoW0nDYTih7z8mcvjXimxNpHyZIpg',
  authDomain: 'bg6app.firebaseapp.com',
  projectId: 'bg6app',
  storageBucket: 'bg6app.appspot.com',
  messagingSenderId: '932252110963',
  appId: '1:932252110963:web:e95a631a1a61a6cef4da06',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RecordList"
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'Memo App',
          // 戻るボタンの色を設定
          headerTintColor: '#ffffff',
          // 戻るボタンの文字を設定
          headerBackTitle: 'Back',
        }}
      >
        {/* 以下のScreen達は自動的に『navigation』としてpropsに渡せるようになっている。 */}
        <Stack.Screen name="RecordList" component={RecordListScreen} />
        <Stack.Screen name="RecordDetail" component={RecordDetailScreen} />
        <Stack.Screen name="RecordEdit" component={RecordEditScreen} />
        <Stack.Screen name="RecordCreate" component={RecordCreateScreen} />
        <Stack.Screen name="PlayerList" component={PlayerListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
