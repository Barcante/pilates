import { View, TextInput, StyleSheet, Text } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
const inputStyles = StyleSheet.create({
input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 16,
    fontSize: 16,
  }
})

const Input: React.FC<{ inputText: string; inputPlaceholder: string }> = ({
  inputText,
  inputPlaceholder,
}) => {
  // ... component body ...
  return (
      // ... JSX elements ...
      <View >
          <Text>{inputText}</Text>
          
            <GestureHandlerRootView >
              <TextInput
                style={inputStyles.input}
                placeholder={inputPlaceholder}/>
            </GestureHandlerRootView>
           
     </View>
  );
};


export default Input