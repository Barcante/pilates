import { Link } from "expo-router";
import Button from "./Button";
import { ThemedText } from "./ThemedText"
import { ThemedView } from "./ThemedView"
import { StyleSheet } from 'react-native';

const Footer = () => { 
    return(
    <ThemedView style={styles.container}>
    <Link style={styles.item}
    href="./settings">Settings</Link>
    <Link style={styles.item}
    href="./scheduleManagement">Schedule Management</Link>
    </ThemedView>
    )
}

const styles = StyleSheet.create({
   container: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-around",
    alignItems: "center"
    
   },
   item: {
    padding: 5,
    color: "white"
    // borderRightWidth: 1,
    // borderColor: "white"
   }
})

export default Footer