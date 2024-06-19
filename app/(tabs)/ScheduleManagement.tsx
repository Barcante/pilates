import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const scheduleStyles = StyleSheet.create({
  sidebar: {
    width: 200,
    backgroundColor: '#f7f7f7',
    padding: 16,
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  scheduleItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  scheduleItemHover: {
    backgroundColor: '#f2f2f2', // Hover effect
  },
  className: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  studioName: {
    fontSize: 16,
    color: '#888888',
    flex: 1, // Allow text to wrap
  },
  classDetails: {
    fontSize: 14,
    color: '#888888',
  },
  addButton: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16,
    color: '#ffffff',
  },
  addButtonHover: {
    backgroundColor: '#0056b3', // Hover effect
  },
});

export default function ScheduleManagement() {
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