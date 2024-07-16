import React, { useEffect, useRef } from 'react';
import { Animated, Vibration, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AnimatedIcon = ({ name, focused, color, size }) => {
  const animation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: focused ? 1.2 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <Animated.View style={{ transform: [{ scale: animation }] }}>
      <View style={{ marginTop: -5 }}>
        <Icon name={name} size={size} color={color} />
      </View>
    </Animated.View>
  );
};

export default AnimatedIcon;
