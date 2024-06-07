import React, { useState }from 'react'  
import { View, Text, TextInput } from 'react-native'
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar'
export function SingnIn() {
  const[text, setText] = useState ("Nada foi Digitado no momento");
  return(
    <View style={styles.container}>
      <Text>Sim</Text>
      <StatusBar style='auto'/>
      <TextInput style ={styles.input}
      onChangeText={setText}/>
      
      <Text>
        Você digitou: {text}
      </Text>
    </View>
  );
} 