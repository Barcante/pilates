import { View, TextInput, StyleSheet, Text } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";


const Input: React.FC<{ text?: string; placeholder: string; style?: React.CSSProperties}> = ({
  text,
  placeholder,
  style
}) => {
  // ... component body ...
  return (
      // ... JSX elements ...
      <ThemedView style={{marginBottom: 20}}>
          <ThemedText type="default">{text}</ThemedText>
          
            <GestureHandlerRootView >
              <TextInput
                style={[styles.input]}
                placeholder={placeholder}
                placeholderTextColor="#949494"/>
            </GestureHandlerRootView>
           
     </ThemedView>
  );
};
const styles = StyleSheet.create({
  input: {
    marginTop: 5,
    marginBottom: 10,
    alignSelf: "flex-start",
    width: 350,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 16,
    fontSize: 16
  }
})

export default Input