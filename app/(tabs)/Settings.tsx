import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const settingsStyles = StyleSheet.create({
  header: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    alignItems: 'center', // Center app title and back button
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  settingOption: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  settingOptionHover: {
    backgroundColor: '#f2f2f2', // Hover effect
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1, // Allow text to wrap
  },
  toggle: {
    // Use appropriate toggle switch
  },
});

export default function Setting() {
  const navigation = useNavigation();

  return (
    <View >
      <View >
      </View>

      {/* Add more profile information or UI elements here */}

      {/* Example navigation button */}
      <Button
        title="Go to Index"
        // onPress={() => navigation.navigate('index')} // Assuming you have a settings tab
      />
    </View>
  );
}