import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import baseStyles from './../../styles/baseStyles'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import Header from '../../components/Header'
import Input from '@/components/Input';


const loginStyles = StyleSheet.create({
  content: {
    flex: 1, // Fill remaining space
    backgroundColor: '#ffffff',
    padding: 24, // Adjust padding as needed
    justifyContent: 'center'
  },
  leftText: {
    flex: 1, // Allow text to grow and fill remaining space
    textAlign: 'left', // Align text to the left side
  },

  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 16,
    fontSize: 16,
  },
  label: {
    color: '#888888',
    fontSize: 14,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 36,
    padding: 13, // Adjust padding as needed
    justifyContent: 'center', // Center elements vertically
    alignItems: 'center', // Center elements horizontally
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
  },
  buttonHover: {
    backgroundColor: '#0056b3', // Hover effect
  },
  title: {
    fontSize: 36,
    paddingTop: 20,
    paddingBottom: 10
  }
});

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={baseStyles.container}>
      <Header/>


      <View>

        <View style={baseStyles.center}>
          <Text style={loginStyles.title}>Login</Text>
        </View>
<View style={loginStyles.content}>
        <View style={baseStyles.padding}>
          <Input
          inputPlaceholder='Enter your login'
          inputText='Login'
          />    
        </View>

        <View style={baseStyles.padding} >
            <Input
            inputText='Password'
            inputPlaceholder='Enter your password'
            />
        </View>
        </View>
        <View>
          <TouchableOpacity
            style={loginStyles.button}

          // onPress={() => navigation.navigate('index')} // Assuming you have a settings tab
          >
            <Text style={loginStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={baseStyles.center}>
          <Text>Or</Text>
        </View>

        <View>
          <TouchableOpacity
            style={loginStyles.button}

          // onPress={() => navigation.navigate('index')} // Assuming you have a settings tab
          >
            <Text style={loginStyles.buttonText}>Login as Instructor</Text>
          </TouchableOpacity>
        </View>
        <View style={baseStyles.center}>
          <Text>Dont have an account? Registrer</Text>
        </View>

      </View>

    </View>
  );
}