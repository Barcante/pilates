import React, { useState } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

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
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  // ... your button styles
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 36,
    padding: 13, // Adjust padding as needed
    justifyContent: 'center', // Center elements vertically
    alignItems: 'center', // Center elements horizontally
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
  },
  text: {
    alignSelf: "center",
    fontSize: 18
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
