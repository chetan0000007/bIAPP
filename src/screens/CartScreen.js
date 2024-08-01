import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';
import { Button } from '../component/button';

const CartScreen = ({ navigation }) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <>
     <View style={{width: '90%', alignSelf:"center"}}>
      <Text>{item.brand}</Text>
      <Text>{item.description}</Text>
      <Image
        source={{ uri: item.thumbnail }} 
        style={{ width: 100, height: 100 }}
      />
    
    </View>
    <Button title="Remove" onPress={() => dispatch(removeFromCart(item.id))} />
    </>
  );

  return (
    <View>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Button title="Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
};

export default CartScreen;
