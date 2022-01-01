import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <LottieView source={require('../../assets/thor_loading.json')} autoPlay />
  );
};

export default Loading;
