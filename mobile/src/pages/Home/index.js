import React, {useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import logoImg from '../../assets/logo.png'

export default function Home(){
    const [states, setStates] = useState([]);
    const [brazilCases, setBrazilCases] = useState([]);
    const navigation = useNavigation();
    
    /*async function requestBrasilCases(){
        await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil')
        .then(res => {
            return res.json();
        })
        .then(brazilBody => {
            const supercases = brazilBody.cases
        })
    }
    */
    async function request(){
        const api = 'https://covid19-brazil-api.now.sh/api/report/v1'
        await fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(jsonBody =>{
            setStates([...jsonBody.data])
        })
    }
    function navigateToDetail(){
        navigation.navigate('Detail')
    }
    useEffect(()=>{
        request();
    }, []);

    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>Total de <Text style={styles.headerTextBold}>0</Text></Text>
            </View>
            <Text style={styles.title}>Casos de Covid-19 no Brasil</Text>
            <Text style={styles.description}>Comece escolhendo o estado</Text>

            <FlatList
                data={states}
                style={styles.statesList}
                keyExtractor={state => `${state.uid}`}
                showsVerticalScrollIndicator={false}
                renderItem={({item: state})=>(
                    <View style={styles.states}>
                        <Text style={styles.stateProperty}>{state.state}</Text>
                        <Text style={styles.stateValue}>{state.uf}</Text>

                        <Text style={styles.stateProperty}>Casos:</Text>
                        <Text style={styles.stateValue}>{state.cases}</Text>

                        <TouchableOpacity style={styles.detailsButton} 
                        onPress={() => navigateToDetail()}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#f76981"/>
                                
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    );
}