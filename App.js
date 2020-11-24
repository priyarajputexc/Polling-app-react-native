import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import AuthProvider from './src/components/AuthProvider';

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider />
    </Provider>
  );
}
