import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { bool } from 'prop-types';

export default function Loading(props) {
  const {isLoading} = props;
  // isLoadingがfalseなら、nullを返す
  if (!isLoading) {
    return (null);
  }
  // trueなら、下記を返す
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    </View>
  );
}

Loading.propTypes = {
  isLoading: bool,
};

Loading.defaultProps = {
  isLoading: false,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    light: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    // レイヤーを調整し、画面の一番上へ
    zIndex: 5,
  },
  inner: {
    marginBottom: 80,
  },
});
