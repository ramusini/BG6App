import React from 'react';
import { TouchableOpacity } from 'react-native';
import { string, func, shape } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function IconButton(props) {
  const { name, style, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Feather name={name} size={24} color="white" style={style} />
    </TouchableOpacity>
  );
}

IconButton.propTypes = {
  name: string.isRequired,
  style: shape(),
  onPress: func,
};

IconButton.defaultProps = {
  style: null,
  onPress: null,
};
