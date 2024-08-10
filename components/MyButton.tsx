import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent, ViewStyle } from 'react-native'
import React from 'react'

interface MyButtonProps {
  onPress: (event: GestureResponderEvent) => void; // Tipo para la función onPress
  title: string; // El título es una cadena de texto
  style?: ViewStyle; // El estilo es opcional y de tipo ViewStyle
}

export default function MyButton({ onPress, title, style } : MyButtonProps) {
  
  return (
    <View>
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
          <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    fontSize: 30,
    color: 'white',
  }
});