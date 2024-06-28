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
    <ThemedView style={styles.content} >

      <Header />

      <ThemedView style={styles.contentCentered}>

        <ThemedView   style={styles.loginContainer}>

          <ThemedView >
            <ThemedText type="title" style={styles.title}>Login</ThemedText>
          </ThemedView>

          <ThemedView >
            <ThemedView >
              <Input
                placeholder='email'
              />
            </ThemedView>

            <ThemedView  >
              <Input
                placeholder='password'
              />
            </ThemedView>
          </ThemedView>

          <ThemedView>
          </ThemedView>

          <ThemedView style={{ marginTop: 20 }}>
            <Button
              text={"Login"}
              onPress={testButton}
            />
          </ThemedView>

          <ThemedView style={styles.registerContainer}>
            <ThemedText type="default" style={styles.text}>Dont have an account?</ThemedText>
            <ThemedText style={{alignSelf: "center"}} type="link">Register</ThemedText>
          </ThemedView>

        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 24,
    position: "relative"   
  },
  contentCentered:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 30,
  },
  registerContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10
  },
  title: {
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 20
  },
  text: {
    marginTop: 10,
    alignSelf: "center"
  }
});