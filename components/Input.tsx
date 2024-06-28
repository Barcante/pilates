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
      <ThemedView lightColor="#ffffff" darkColor="#ffffff" style={{marginBottom: 20}}>
          <ThemedText style={styles.text} type="default">{text}</ThemedText>
          
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
    backgroundColor: "#ffffff",
    marginTop: 5,
    marginBottom: 10,
    alignSelf: "center",
    width: 350,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 16,
    fontSize: 16
  },
  text: {
    color: "black"
  }
})

export default Input