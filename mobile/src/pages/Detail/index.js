import React, { useState, useEffect } from 'react';
import {Feather} from '@expo/vector-icons';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail(){
  const navigation = useNavigation();
  const route = useRoute();
  const state = route.params.state;
  

  function navigateBack(){
    navigation.goBack()
}
    return (
      <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#f76981"/>
                </TouchableOpacity>
            </View>
            <View style={styles.state}>
                <Text style={[styles.stateProperty,{marginTop: 0}]}>{state.state}/{state.uf}</Text>
              

                <Text style={styles.stateProperty}>CASOS CONFIRMADOS:</Text>
                <Text style={styles.stateValue}>{state.cases}</Text>

                <Text style={styles.stateProperty}>MORTES:</Text>
                <Text style={styles.stateValue}>{state.deaths}</Text>

                <Text style={styles.stateProperty}>CASOS SUSPEITOS:</Text>
                <Text style={styles.stateValue}>{state.suspects}</Text>

                <Text style={styles.stateProperty}>TESTADO NEGATIVO:</Text>
                <Text style={styles.stateValue}>{state.refuses}</Text>
            </View>
        </View>
    );
}