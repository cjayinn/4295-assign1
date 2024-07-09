import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// DetailScreen component receives 'route' prop
const DetailScreen = ({ route }) => {
  // Destructuring 'item' from route.params
  const { item } = route.params;

  return (
    <View style={styles.container}>
      {/* Title of the item */}
      <Text style={styles.title}>{item.name}</Text>
      
      {/* Description of the item */}
      <Text style={styles.description}>{item.description}</Text>
      
      {/* Price of the item, displayed in green */}
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );
};

// Styles for DetailScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: 'green', // Green color for price
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DetailScreen;
