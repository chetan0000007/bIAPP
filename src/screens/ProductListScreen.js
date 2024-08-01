import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import productsData from '../assets/products.json'; // Import the JSON file
import { Button } from '../component/button';

const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = () => {
    const productsPerPage = 10;
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const newProducts = productsData.products.slice(startIndex, endIndex);
    setProducts(prevProducts => [...prevProducts, ...newProducts]);
    setLoading(false);
  };

  const loadMore = () => {
    if (!loading) {
      setLoading(true);
      setPage(page + 1);
    }
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigation.navigate('Cart');
  };

  const renderItem = ({ item }) => (
    <View style={{width: '90%', alignSelf:"center"}}>
      <Text>{'Brand : '}{item.title}</Text>
      <Text>{'Price : '}{item.price}</Text>
      <Text>{'Description : '}{item.description}</Text>
      <Image
        source={{ uri: item.thumbnail }} 
        style={{ width: 100, height: 100 }}
      />
      <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading && <Text style={{color: 'red', marginVertical:25, textAlign: 'center'}}>Loading more...</Text>}
    />
  );
};

export default ProductListScreen;
