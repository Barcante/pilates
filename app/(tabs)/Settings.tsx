import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import baseStyles from '@/styles/baseStyles';
import Header from '@/components/Header';
import Input from '@/components/Input';
import { Image } from 'expo-image'
import Button from '@/components/Button';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';



export default function Setting() {
  const navigation = useNavigation();

  function testButton() {
    console.log("Botão Apertado")
  }

  return (
    <ThemedView lightColor="#ffffff" darkColor="#ffffff" style={styles.content}>
      <Header />
      <View>
        <ThemedText type="subtitle" style={styles.title}>Profile Information</ThemedText>
      </View>

      <ThemedView lightColor="#ffffff" darkColor="#ffffff" style={styles.loginContainer}>
        <ThemedView lightColor="#ffffff" darkColor="#ffffff">
          <View style={{marginBottom: 20}}>
            <Input
              placeholder='email'
              text="E-mail"
            />
         </View>

            <Input
              placeholder='password'
              text="Senha"
            />
          </ThemedView> 
      </ThemedView>


      <ThemedView lightColor="#ffffff" darkColor="#ffffff" >
        <ThemedText type="subtitle" style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Profile Picture</ThemedText>
        <ThemedView lightColor="#ffffff" darkColor="#ffffff" style={styles.pictureChange}>
          <Image
            source={{ uri: '@/assets/images/favicon.png' }}
            style={{ width: 50, height: 50, marginRight: 10 }}
          ></Image>
          <Button
            text={"Change"}
            onPress={testButton}
          />
        </ThemedView>
      </ThemedView>
      <ThemedView>
        <Switch></Switch>
      </ThemedView>
    </ThemedView>

  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24
  },
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 1,
    marginBottom: 30
  },
  title: {
    alignSelf: "flex-start",
    color: "black",
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 100
  },
  text: {
    color: "black",
    fontWeight: 500
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