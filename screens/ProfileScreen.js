import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

// Functional component ProfileScreen receives navigation as a prop
const ProfileScreen = ({ navigation }) => {
  return (
    // Main container View with styles from StyleSheet
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image source={require('../images/profile.png')} style={styles.profileImage} />

      {/* User Info */}
      <Text style={styles.username}>Jeon Hee-jin</Text>
      <Text style={styles.email}>heejinartms@gmail.com</Text>

      {/* Additional Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Bio:</Text>
        <Text style={styles.infoText}>Curious food explorer sharing tasty recipes and culinary discoveries. Join me for delicious adventures!</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Location:</Text>
        <Text style={styles.infoText}>Seoul, South Korea</Text>
      </View>

      {/* Button to navigate back to HomeScreen */}
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')} // Navigation action to go back to 'Home' screen
        color="#FFA500" // Orange color for the button
      />
    </View>
  );
};

// Styles defined using StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up entire screen space
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#fff', // White background color
    padding: 20, // Padding around the content
  },
  profileImage: {
    width: 150, // Width of the profile image
    height: 150, // Height of the profile image
    borderRadius: 75, // Border radius to make it circular
    marginBottom: 20, // Margin at the bottom of the profile image
  },
  username: {
    fontSize: 24, // Font size for the username
    fontWeight: 'bold', // Bold font weight for emphasis
    marginBottom: 10, // Margin at the bottom of the username
  },
  email: {
    fontSize: 16, // Font size for the email
    color: '#999', // Light gray color for the email
    marginBottom: 20, // Margin at the bottom of the email
  },
  infoContainer: {
    width: '100%', // Full width for the info container
    marginBottom: 20, // Margin at the bottom of each info section
    paddingHorizontal: 20, // Horizontal padding inside the container
  },
  infoLabel: {
    fontSize: 16, // Font size for the info label (e.g., 'Bio:')
    fontWeight: 'bold', // Bold font weight for the label
  },
  infoText: {
    fontSize: 16, // Font size for the info text (e.g., bio content)
    color: '#666', // Medium gray color for the info text
  },
});

export default ProfileScreen; // Export ProfileScreen component as default
