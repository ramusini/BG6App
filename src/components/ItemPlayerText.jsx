import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, number } from 'prop-types';

export default function ItemPlayerText(props) {
  const { name, score, rank } = props;
  return (
    <View style={styles.itemPlayer}>
      <Text style={styles.itemPlayerName}>{name}</Text>
      <Text style={styles.itemPlayerScore}>{`${score}点`}</Text>
      <Text style={styles.itemPlayerRank}>{`${rank}位`}</Text>
    </View>
  );
}

ItemPlayerText.propTypes = {
  name: string,
  score: number,
  rank: number,
};

ItemPlayerText.defaultProps = {
  name: '',
  score: '',
  rank: '',
};

const styles = StyleSheet.create({
  itemPlayer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemPlayerName: {
    fontSize: 16,
  },
  itemPlayerScore: {
    fontSize: 16,
  },
  itemPlayerRank: {
    fontSize: 16,
  },
});
