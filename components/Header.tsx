import { View, StyleSheet, Text } from "react-native"
import { Dimensions } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const ScreenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  header: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: 'center', 
    flexDirection: "row",
    gap: 1,
    width: ScreenWidth,
    backgroundColor: '#91ca64',
    padding: 30,
    borderRadius: 4,
    marginBottom: 10,
  },
  icon: {
    color: '#ffffff'
  }
})


const Header = () => {
  return (
    <ThemedView style={styles.header}>
      <Ionicons size={24}  name="barbell" style={styles.icon} />
      <ThemedText type="title">PilatesPlanner</ThemedText>
    </ThemedView>

  )
}


export default Header
