import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import baseStyles from '@/styles/baseStyles';
import Header from '@/components/Header';
import Input from '@/components/Input';
import { Image } from 'expo-image'
import Button from '@/components/Button';



export default function Setting() {
  const navigation = useNavigation();

  function testButton() {
    console.log("Botão Apertado")
  }

  return (
    <View style={styles.content}>
      <Header />
      <View style={{ marginTop: 50 }}>
        <Text style={styles.title}>Profile Information</Text>
      </View>
      <View>
        <Input
          style={{ marginTop: 50 }}
          text={'E-mail'}
          placeholder={'Enter your e-mail'}
        />
        <Input
          text={'Password'}
          placeholder={'Enter your password'}
        />
      </View>
      <View  >
        <Text style={[styles.text, {marginTop: 10, marginBottom: 10}]}>Profile Picture</Text>
        <View style={styles.pictureChange}>
          <Image
            source={{ uri: '/assets/images/favicon.png' }}
            style={{ width: 50, height: 50, marginRight: 10 }}
          ></Image>
          <Button
            text={"Change"}
            onPress={testButton}
          />
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 24,
    fontWeight: '300',
    marginTop: 10,
    marginBottom: 25
  },
  text: {
    fontSize: 18
  },

  pictureChange: {
    display: "flex",
    flexDirection: "row",
  },

  buttonPicture: {
    backgroundColor: '#4CAF50',
    borderRadius: 56,
    padding: 1, // Adjust padding as needed
    height: 50,
    width: 80,
  },

});