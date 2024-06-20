import { View, StyleSheet, Text } from "react-native"
const headerStyles = StyleSheet.create({
    header: {
        backgroundColor: '#4CAF50',
        padding: 16,
        alignItems: 'center', // Center logo and title
        borderRadius: 4
      }
    })


const Header = () => {
    return (
        <View style={headerStyles.header}>
        <Text>PilatesPlanner</Text>
      </View>

    )
    }


    export default Header
