import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getUsers } from '../actions';

const userElement = (user, index) => {
  return user.username ? (
    <View style={styles.userContainer}>
      <Text style={styles.index}>{index}.</Text>
      <Text style={styles.userCred}>
        {user.username} / {user.password}
      </Text>
      <Text style={styles.userRole}>{user.role}</Text>
    </View>
  ) : (
    <></>
  );
};

const Users = (props) => {
  useEffect(() => {
    props.getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={props.users}
        renderItem={({ item, index }) => userElement(item, index + 1)}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  index: {
    flex: 0.5,
    marginRight: 5,
    textAlign: 'left',
  },
  userCred: {
    flex: 4,
  },
  userRole: {
    flex: 1,
  },
});

const mapStateToProps = (state) =>
  state
    ? {
        users: state.users,
      }
    : {};

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
