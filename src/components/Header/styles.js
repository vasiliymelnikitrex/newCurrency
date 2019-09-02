import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    paddingHorizontal: 16,
    paddingTop: StatusBar.currentHeight,
    width: '100%',
  },
  wrapper: {
    alignSelf: 'flex-end',
  },
});

export default styles;
