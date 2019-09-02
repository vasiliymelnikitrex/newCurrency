import {StyleSheet, Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

const styles = StyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,

  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,

  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo__bg: {
    width: imageWidth,
    height: imageWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo__img: {
    width: imageWidth / 2,
  },
  logo__text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: -0.5,
    marginTop: 20,
  }
});

export default styles;
