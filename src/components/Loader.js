import React from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { colors } from '../../constants';

const Loader = ({ isLoading }) => {
  return isLoading ? (
    <ActivityIndicator
      size='small'
      color={colors.white}
      style={{ marginRight: 20 }}
    />
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, null)(Loader);
