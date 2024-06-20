import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import baseStyles from '@/styles/baseStyles';
import Header from '@/components/Header';
import Input from '@/components/Input';
import {Image} from 'expo-image'

const settingsStyles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
   
  },
  flexDisplay: {
    display: "flex",
    flexDirection: "row"
  },
  settingOption: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 56,
    padding: 1 , // Adjust padding as needed
    justifyContent: 'center', // Center elements vertically
    alignItems: 'center', // Center elements horizontally
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
},
  buttonPicture: {
    backgroundColor: '#4CAF50',
    borderRadius: 56,
    padding: 1 , // Adjust padding as needed
    height: 50,
    width: 80,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    alignSelf: 'center'
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
    <View style={settingsStyles.content}>
      <Header />
      <View style={baseStyles.container}id="profileInformation">
      <Text>Profile Information</Text>
      <View>
        <Input
          inputText="-Name"
          inputPlaceholder="Enter your e-mail"
        />
      </View>

      <View>
        <Input
          inputText="E-mail"
          inputPlaceholder="Enter your password"
        />
      </View>
      </View>


      <View id="profilePicture">
      <Text>Profile Picture</Text>
        <View style={settingsStyles.flexDisplay}>
  
        <Image
        source={{uri: '/assets/images/favicon.png'}} // Local image using 'require'
        style={{ width: 50, height: 50,  }}
        />
       <View style={settingsStyles.buttonContainer}>
       <TouchableOpacity
            style={settingsStyles.buttonPicture}

          // onPress={() => navigation.navigate('index')} // Assuming you have a settings tab
          >
            <Text style={settingsStyles.buttonText}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
  );
}