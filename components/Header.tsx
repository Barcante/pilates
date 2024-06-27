import { View, StyleSheet, Text } from "react-native"
import { Dimensions } from "react-native";

const ScreenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  header: {
    width: ScreenWidth,
    backgroundColor: '#4CAF50',
    padding: 16,
    alignItems: 'center', // Center logo and title
    borderRadius: 4,
    position: "absolute",
    marginBottom: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    margin: 3
  }
})


const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>PilatesPlanner</Text>
    </View>

  )
}


export default Header
