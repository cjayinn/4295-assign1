import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-elements'; // Using Button from react-native-elements

// CategoryScreen component receives 'route' and 'navigation' props
const CategoryScreen = ({ route, navigation }) => {
  const { categoryId } = route.params; // Destructuring 'categoryId' from route.params

  // Sample data for the list of recipes
  const recipes = [
    { id: '1', name: 'Pancakes' },
    { id: '2', name: 'Omelette' },
    { id: '3', name: 'French Toast' },
    { id: '4', name: 'Smoothie' },
    { id: '5', name: 'Fruit Salad' },
  ];

  // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Title displaying the current category */}
      <Text style={styles.title}>Category: {categoryId}</Text>
      
      {/* FlatList to display recipes */}
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      
      {/* Button to navigate back to HomeScreen */}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

// Styles for CategoryScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  list: {
    width: '100%',
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemText: {
    fontSize: 18,
  },
});

export default CategoryScreen;
