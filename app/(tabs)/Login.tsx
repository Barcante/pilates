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
              placeholder='Enter your login'
              text='Login'
            />
          </View>

          <View >
            <Input
              text='Password'
              placeholder='Enter your password'
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
        <Text style={styles.text}>Or</Text>
        <View>
         <Button
         text={"Login as a insctructor"}
         onPress={testButton}
         />
        
        </View>
        <View>
          <Text  style={styles.text}>Dont have an account? Registrer</Text>
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
    fontSize: 36,
    paddingTop: 20,
    paddingBottom: 10
  },
  text: {
    alignSelf: "center",
    fontSize: 18
  }
});