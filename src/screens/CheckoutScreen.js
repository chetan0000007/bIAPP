// src/screens/CheckoutScreen.js
import React from 'react';
import { View, Alert, Animated,Text } from 'react-native';
import { Button } from '../component/button';

const CheckoutScreen = ({ navigation }) => {
  const animatedValue = new Animated.Value(0);

  const handleOrderCompletion = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Alert.alert('Order Completed');
      navigation.navigate('Products');
    });
  };

  return (
    <View>
      <Button title="Complete Order (COD)" onPress={handleOrderCompletion} />
      <Animated.View style={{ opacity: animatedValue }}>
        <Text>Order Placed</Text>
      </Animated.View>
    </View>
  );
};

export default CheckoutScreen;
