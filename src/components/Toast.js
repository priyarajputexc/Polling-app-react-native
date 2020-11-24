import { ToastAndroid } from 'react-native';

const Toast = (message) =>
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    25,
    50
  );

export default Toast;
