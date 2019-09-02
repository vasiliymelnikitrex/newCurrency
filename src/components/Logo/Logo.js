import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Keyboard, Animated} from 'react-native';

import bg from '../../images/background.png';
import logo from '../../images/logo.png';
import styles from './styles';

const AnimatedImageContainer = Animated.createAnimatedComponent(
  ImageBackground,
);

const containerImageWidth = new Animated.Value(styles.$largeContainerSize);

const imageWidth = new Animated.Value(styles.$largeImageSize);

const containerImageStyle = [
  styles.logo__bg,
  {width: containerImageWidth, height: containerImageWidth},
];

const imageStyle = [styles.logo__img, {width: imageWidth, height: imageWidth}];

const Logo = () => {
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardHide,
    );
    return () => {};
  }, []);

  const keyboardShow = () => {
    // Animated.parallel([
    //   Animated.timing(containerImageWidth, {
    //     toValue: styles.$smallContainerSize,
    //     duration: 250,
    //   }),
    //   Animated.timing(imageWidth, {
    //     toValue: styles.$smallImageSize,
    //     duration: 250,
    //   }),
    // ]).start();
  };

  const keyboardHide = () => {
    // Animated.parallel([
    //   Animated.timing(containerImageWidth, {
    //     toValue: styles.$largeContainerSize,
    //     duration: 250,
    //   }),
    //   Animated.timing(imageWidth, {
    //     toValue: styles.$largeImageSize,
    //     duration: 250,
    //   }),
    // ]).start();
  };

  return (
    <View style={styles.logo}>
      <AnimatedImageContainer
        style={containerImageStyle}
        source={bg}
        resizeMode="contain">
        <Animated.Image source={logo} style={imageStyle} resizeMode="contain" />
      </AnimatedImageContainer>
      <Text style={styles.logo__text}>Currency Converter</Text>
    </View>
  );
};

export default Logo;
