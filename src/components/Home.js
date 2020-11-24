import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getPolls } from '../actions';
import Poll from './Poll';

const Home = (props) => {
  useEffect(() => {
    !props.polls && props.getPolls();
  }, [props.polls]);

  return (
    <View>
      <FlatList
        data={props.polls}
        renderItem={({ item, index }) => <Poll poll={item} index={index + 1} />}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  polls: state && state.polls,
});

const mapDispatchToProps = (dispatch) => ({
  getPolls: () => dispatch(getPolls()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
