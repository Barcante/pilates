import { View, StyleSheet, Text } from "react-native"
import { Dimensions } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const ScreenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  header: {
    width: ScreenWidth,
    backgroundColor: '#91ca64',
    padding: 16,
    alignItems: 'center', // Center logo and title
    borderRadius: 4,
    position: "absolute",
    marginBottom: 10,
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    gap: 1
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    margin: 3,
    fontFamily: "Montserrat",
    fontWeight: "600"
  },
  icon: {
    color: '#ffffff'
  }
})


const Header = () => {
  return (
    <View style={styles.header}>
      <Ionicons size={24}  name="barbell" style={styles.icon} />
      <Text style={styles.text}>Pilates Planner</Text>
    </View>

  )
}


export default Header
