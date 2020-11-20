import React from 'react';
import { TouchableHighlight } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../../constants';

const Checkbox = (props) => {
  return (
    <TouchableHighlight
      underlayColor='transparent'
      onPress={() => props.setSelected(props.value)}
    >
      {props.selected === props.value ? (
        <AntDesign
          name='checkcircle'
          size={20}
          color={colors.blue}
          style={{ marginRight: 10 }}
        />
      ) : (
        <Entypo
          name='circle'
          size={20}
          color={colors.grey}
          style={{ marginRight: 10 }}
        />
      )}
    </TouchableHighlight>
  );
};

export default Checkbox;
