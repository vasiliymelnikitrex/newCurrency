import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
  },
  selectedText: {},
  separator: {
    marginLeft: 20,
    backgroundColor: '#c3d4dd',
    flex: 1,
    height: 1,
    width: '90%',
  },
  icon: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#536879',
    justifyContent: 'center',
  },
  iconImg: {
    width: 15,
    height: 15,
    alignSelf: 'center',
  },
});

export default styles;
