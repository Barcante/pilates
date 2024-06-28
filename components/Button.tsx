import React, { useState } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

const Button: React.FC<{ text: string; onPress: ()=> void; style?: React.CSSProperties; }> = ({ text, onPress, style }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);

  const buttonStyles = [styles.button];
  if (isPressed) {
    buttonStyles.push(styles.buttonHover); // Apply hover styles on press
  }
  
  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={styles.button}
    >
      <ThemedText type="default">{text}</ThemedText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  // ... your button styles
  button: {
    backgroundColor: '#91ca64',
    borderRadius: 36,
    padding: 13, // Adjust padding as needed
    justifyContent: 'center', // Center elements vertically
    alignItems: 'center', // Center elements horizontally
  },
  buttonHover: {
    backgroundColor: '#0056b3', // Hover effect
    borderRadius: 36,
    padding: 13, // Adjust padding as needed
    justifyContent: 'center', // Center elements vertically
    alignItems: 'center', // Center elements horizontally
  }
});

export default Button;
