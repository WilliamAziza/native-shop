import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import blueJacket from '../assets/blueJacket.jpg';
import fourStar from '../assets/fourStar.png';
import pinkhoody from '../assets/pinkhoody.jpg';
import jacket from '../assets/jacket.jpg';
import hoody from '../assets/hoody.jpg';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Bike Jacket Softshell Warm',
    price: 99,
    image: blueJacket,
    rating: 4.5,
    description: 'High-quality softshell jacket perfect for biking and outdoor activities'
  },
  {
    id: 2,
    name: 'Pink Hoody Merino',
    price: 80,
    image: pinkhoody,
    rating: 4.2,
    description: 'Comfortable merino wool hoody in stylish pink color'
  },
  {
    id: 3,
    name: 'Red Women Jacket',
    price: 115,
    image: jacket,
    rating: 4.7,
    description: 'Elegant red jacket for women with premium finish'
  },
  {
    id: 4,
    name: 'Hooded Jacket Classic',
    price: 140,
    image: hoody,
    rating: 4.8,
    description: 'Classic hooded jacket with modern design and comfort'
  }
];

const Commerce = ({ navigation }) => {
  const { addToCart, getCartItemsCount } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Ionicons 
            name="arrow-back-outline" 
            size={24} 
            color="black" 
            style={styles.backArrow}
            onPress={() => navigation.goBack()}
          /> 
          <MaterialCommunityIcons 
            name="cart-outline" 
            size={24} 
            color="black" 
            style={styles.cart}
            onPress={() => navigation.navigate('Cart')}
          />
          {getCartItemsCount() > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{getCartItemsCount()}</Text>
            </View>
          )}
        </View>
        
        <Text style={styles.header}>Women's Jackets</Text>
        
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchText}>Search Jackets</Text>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>

        {products.map((product) => (
          <View key={product.id} style={styles.productContainer}>
            <Image source={product.image} style={styles.image}/>
            
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Image source={fourStar} style={styles.star}/>
              <Text style={styles.productDescription}>{product.description}</Text>
              <Text style={styles.amount}>${product.price}</Text>
              
              <TouchableOpacity 
                style={styles.addToCartButton}
                onPress={() => handleAddToCart(product)}
              >
                <Text style={styles.addToCartText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  backArrow: {
    marginRight: 'auto',
  },
  cart: {
    marginLeft: 'auto',
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: -8,
    top: -8,
    backgroundColor: '#6b0b9c',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  searchButton: {
    backgroundColor: "#fff",
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  searchText: {
    color: "#cacdcf",
  },
  filterText: {
    color: "#2d4391",
    fontWeight: 'bold',
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  productDescription: {
    color: '#666',
    fontSize: 12,
    marginBottom: 8,
  },
  star: {
    height: 20,
    width: 80,
    marginBottom: 8,
  },
  amount: {
    fontWeight: 'bold',
    color: "#8341c4",
    fontSize: 18,
    marginBottom: 8,
  },
  addToCartButton: {
    backgroundColor: '#6b0b9c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Commerce;
