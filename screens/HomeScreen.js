import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

// Functional component HomeScreen receives navigation as a prop
// Array of categories
const HomeScreen = ({ navigation }) => {
  const categories = [
    { id: '1', name: 'Breakfast' },
    { id: '2', name: 'Lunch' },
    { id: '3', name: 'Dinner' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Hamburger menu */}
        <Ionicons name="menu-outline" size={30} color="#333" onPress={() => navigation.openDrawer()} />

        {/* Profile icon */}
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../images/profile.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.todaysPick}>Today's Pick</Text>
      <Text style={styles.description}>
        based on food you <Text style={styles.orangeText}>loved</Text>
      </Text>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
        <Text style={styles.placeholderText}>Search food</Text>
      </View>

      <Text style={styles.heading}>Choose a Category:</Text>
      <View style={styles.categoryContainer}>
        {categories.map(category => (
          <Button
            key={category.id}
            title={category.name}
            onPress={() => navigation.navigate('Category', { categoryId: category.id })}
            color="orange"
          />
        ))}
      </View>

      {/* Grey text for recipes */}
      <Text style={styles.recipesText}>10 recipes</Text>

      {/* Food Photos */}
      <View style={styles.foodPhotosContainer}>
        <View style={styles.imageRow}>
          <Image source={require('../images/food1.jpg')} style={styles.foodPhoto} />
          <Image source={require('../images/food2.jpg')} style={styles.foodPhoto} />
        </View>
        <View style={styles.imageRow}>
          <Image source={require('../images/food3.jpg')} style={styles.foodPhoto} />
          <Image source={require('../images/food4.jpg')} style={styles.foodPhoto} />
        </View>
        <View style={styles.imageRow}>
          <Image source={require('../images/food5.jpg')} style={styles.foodPhoto} />
          <Image source={require('../images/food1.jpg')} style={styles.foodPhoto} />
        </View>
      </View>
    </View>
  );
};

// Styles defined using StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: -20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  todaysPick: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginLeft: 4,
    color: '#999',
    marginBottom: 20,
  },
  orangeText: {
    color: 'orange',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
  },
  searchIcon: {
    marginRight: 10,
  },
  placeholderText: {
    flex: 1,
    fontSize: 16,
    color: '#999',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  recipesText: {
    fontSize: 16,
    color: '#999',
    marginTop: 20,
    marginBottom: 10,
  },
  foodPhotosContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20, // Increased marginBottom for more space between rows
  },
  foodPhoto: {
    width: '48%', // Adjusted width to maintain uniformity and leave space between images
    height: 250, // Set a fixed height for all images
    borderRadius: 10,
  },
  profileImage: {
    width: 30, // Adjust width and height to fit your design
    height: 30,
    borderRadius: 15, // Half of the width and height to make it circular
  },
});

export default HomeScreen;
