import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header'
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function Login() {
  const navigation = useNavigation();
  function testButton () {
    console.log("Botão Apertado")
  }
  return (
    <View style={styles.content}>
      <Header />
      <View style={styles.centeredContainer}>
      <View style={styles.loginContainer}>
        <View>
          <Text style={styles.title}>Login</Text>
        </View>
        <View>
          <View>
            <Input
              placeholder='email'
            />
          </View>

          <View >
            <Input
              placeholder='password'
            />
          </View>
        </View>
        <View>
        </View>
        <View style={{marginTop: 20}}>
        <Button
         text={"Login"}
         onPress={testButton}
         />
        </View>
        <View>
          <Text  style={styles.text}>Dont have an account? Register</Text>
        </View>

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
  loginContainer:{
    display: "flex",
    flexDirection: "column",
    marginTop: 30,
  },
  centeredContainer:{
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
    fontSize: 12,
    marginTop: 10,
    fontFamily: "Montserrat"
  }
});