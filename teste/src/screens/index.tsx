import React, { useState }from 'react'  
import { View, Text, TextInput, Image, StatusBar } from 'react-native'

import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../components/ButtonIcon';
export function SignIn() {
  return(
    <View style={styles.container} >
    <StatusBar barStyle = 'light-content' backgroundColor={'transparent'} translucent/>

        <Image source={IllustrationImg} style = {styles.image} resizeMode='stretch'/>

    <View style={styles.content}>

      <Text style={styles.title}>
        Organize Suas {`\n`}
        Jogatinas {`\n`}
        Facilmente
      </Text>
      <Text style={styles.subtitle}>
        Crie um grupo com amigos para jogar {`\n`}
        seus jogos favoritos 
      </Text>
      <ButtonIcon/>
    </View>


    </View>


  );
} 