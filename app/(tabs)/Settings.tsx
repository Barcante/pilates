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
    <ThemedView style={styles.content}>
      <Header />
      <View>
        <ThemedText type="subtitle" style={styles.title}>Profile Information</ThemedText>
      </View>

      <ThemedView  style={styles.loginContainer}>
        <ThemedView >
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


      <ThemedView   >
        <ThemedText type="subtitle" style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Profile Picture</ThemedText>
        <ThemedView  style={styles.pictureChange}>
          <Image
            source={{ uri: 'pilates/assets/images/partial-react-logo.png' }}
            style={{ width: 50, height: 50, marginRight: 10 }}
          ></Image>
          <Button
            text={"Change"}
            onPress={testButton}
          />
        </ThemedView>
      </ThemedView>
      <ThemedView style={{marginTop: 20}}>
        <ThemedText type="subtitle" style={[styles.text]}>Notification Preferences</ThemedText>
        <ThemedView style={styles.switchContainer}>
         <ThemedText type="default">
            E-mail notificattions
          </ThemedText>
           <Switch></Switch>
        </ThemedView>
        <ThemedView >
         <ThemedText type="default">
            Push notificattions
          </ThemedText>
           <Switch ></Switch>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.buttonsContainer}>
        <ThemedText type="subtitle" style={[styles.text]}>Other Settings</ThemedText>
        <Button 
        onPress={testButton}
        text={"Change Password"}/>
        <Button 
        onPress={testButton}
        text={"Change App Theme"}/>
      </ThemedView>
    </ThemedView>

  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
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
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 100
  },
  text: {
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
  switchContainer:{
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignContent: "center",
    justifyContent: "center"
  }

});