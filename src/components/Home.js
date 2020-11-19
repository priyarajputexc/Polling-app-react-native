import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getPolls } from '../actions';
import Poll from './Poll';

const Home = (props) => {
  useEffect(() => {
    props.getPolls();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={props.polls}
        renderItem={({ item, index }) => <Poll poll={item} index={index + 1} />}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const mapStateToProps = (state) => ({
  polls: state && state.polls,
});

const mapDispatchToProps = (dispatch) => ({
  getPolls: () => dispatch(getPolls()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
