import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';



const baseStyles = StyleSheet.create({
  container: {
    flex: 1, // Fills the entire screen
    backgroundColor: "'#ffffff'",    
  },
  row: {
    flexDirection: 'row', // Arrange elements horizontally
  },
  column: {
    flexDirection: 'column', // Arrange elements vertically
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center', // Center elements within container
  },
  padding: {
    padding: 16, // Add padding around elements
  },
  margin: {
    marginBottom: 16, // Add margin below elements (adjust as needed)
  },
});

export default baseStyles;