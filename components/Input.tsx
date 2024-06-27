import { View, TextInput, StyleSheet, Text } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
const styles = StyleSheet.create({
  inputText: {
    fontSize: 18,
    fontWeight: "400"
  },
  input: {
    marginTop: 5,
    alignSelf: "center",
    width: 350,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 16,
    fontSize: 16
  }
})

const Input: React.FC<{ text: string; placeholder: string; style?: React.CSSProperties}> = ({
  text,
  placeholder,
  style
}) => {
  // ... component body ...
  return (
      // ... JSX elements ...
      <View  style={{marginBottom: 40}}>
          <Text style={styles.inputText}>{text}</Text>
          
            <GestureHandlerRootView >
              <TextInput
                style={[styles.input]}
                placeholder={placeholder}/>
            </GestureHandlerRootView>
           
     </View>
  );
};


export default Input