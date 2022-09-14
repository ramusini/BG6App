import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function ItemPlayerText(props) {
  const { children } = props;
  return (
    <Text style={styles.itemPlayerText}>{children}</Text>
  );
}

ItemPlayerText.propTypes = {
  children: string.isRequired,
};

const styles = StyleSheet.create({
  itemPlayerText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
