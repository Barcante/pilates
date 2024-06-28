import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header'
import Input from '@/components/Input';
import Button from '@/components/Button';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Login() {
  const navigation = useNavigation();
  function testButton() {
    console.log("Botão Apertado")
  }
  return (
    <ThemedView lightColor="#ffffff" darkColor="#ffffff" style={styles.content}>

      <Header />

      <ThemedView lightColor="#ffffff" darkColor="#ffffff" style={styles.centeredContainer}>

        <ThemedView lightColor="#ffffff" darkColor="#ffffff" style={styles.loginContainer}>

          <ThemedView lightColor="#ffffff" darkColor="#ffffff">
            <ThemedText type="title" style={styles.text}>Login</ThemedText>
          </ThemedView>

          <ThemedView lightColor="#ffffff" darkColor="#ffffff">
            <ThemedView lightColor="#ffffff" darkColor="#ffffff">
              <Input
                placeholder='email'
              />
            </ThemedView>

            <ThemedView lightColor="#ffffff" darkColor="#ffffff">
              <Input
                placeholder='password'
              />
            </ThemedView>
          </ThemedView>

          <ThemedView lightColor="#ffffff" darkColor="#ffffff">
          </ThemedView>

          <ThemedView lightColor="#ffffff" darkColor="#ffffff" style={{ marginTop: 20 }}>
            <Button
              text={"Login"}
              onPress={testButton}
            />
          </ThemedView>

          <ThemedView lightColor="#ffffff" darkColor="#ffffff">
            <ThemedText style={styles.text}>Dont have an account? Register</ThemedText>
          </ThemedView>

        </ThemedView>
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
    marginTop: 30,
  },
  centeredContainer: {
    position: 'absolute',
    top: '20%',
    left: '5%'
  },
  title: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 36,
    paddingTop: 20,
    paddingBottom: 10,
    fontFamily: "Montserrat"
  },
  text: {
    alignSelf: "center",
    color: "black",
    marginTop: 10,
    fontFamily: "Montserrat"
  }
});