import React from 'react';
import {Text, Image, View, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import DiscordIMG from '../../assets/discord.png'
import { styles } from './styles'

export function ButtonIcon (){
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordIMG} style={styles.icon}/>
            </View>
            <Text>
                Entrar com Discord
            </Text>
        </TouchableOpacity>
    )
}