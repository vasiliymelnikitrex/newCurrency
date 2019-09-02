import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    height: 48,
    marginVertical: 8,
  },
  buttonContainer: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '#4e6371',
  },
  disabled: {
    backgroundColor: '#f1eff1',
  },
  border: {
    height: 48,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '#e2e2e2',
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 16,
    color: '#4e6371',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
});

export default styles;
