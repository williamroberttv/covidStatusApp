import React, {useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './styles';
import logoImg from '../../assets/logo.png'

export default function Home(){
    const [states, setStates] = useState([]);
    const [total, setTotal] = useState(0);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    
    function reload(){
        setLoading(true)
    }
    async function requestBrasilCases(){
        const totalCasesApi = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil'
        fetch(totalCasesApi)
        .then(res =>{
            return res.json()
        })
        .then(resBody =>{
            setTotal(resBody.data.confirmed)
        })
    
    }
    async function request(){
        const api = 'https://covid19-brazil-api.now.sh/api/report/v1'
        await fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(jsonBody =>{
            const sortedData = jsonBody.data.sort((a,b) => (a.uf > b.uf ? 1 : -1));

            setStates([...sortedData])
            
        })
        setLoading(false)
    }

    function navigateToDetail(state){
        navigation.navigate('Detail', {state})
    }

    useEffect(()=>{
        request();
        requestBrasilCases();
    }, [loading === true]);

    if(loading){
        return(
            <View style={styles.containerLoading}>
                <ActivityIndicator 
                size="large" 
                color="#f76981"/>
                <Text>
                    Buscando casos ...
                </Text>
            </View>
        )
    } else
    {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logoImg} />
                    <Text style={styles.headerText}>Total de <Text 
                    style={styles.headerTextBold}>{total}</Text> casos</Text>
                </View>
                    <TouchableOpacity style={styles.reload} 
                    onPress={() => reload()}>
                        <Text style={styles.reloadText}>Atualizar</Text>                  
                        <Feather name="refresh-cw" size={22} color="#f76981"/>
                    </TouchableOpacity>
                <Text style={styles.title}>Casos de Covid-19 no Brasil</Text>
                <Text style={styles.description}>Comece escolhendo o estado</Text>

                <FlatList
                    data={states}
                    style={styles.statesList}
                    keyExtractor={state => `${state.uid}`}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item: state})=>(
                        <View style={styles.states}>
                            <Text style={styles.stateProperty}>
                            {state.state}/{state.uf}</Text>
                            

                            <Text style={styles.stateProperty}>Casos:</Text>
                            <Text style={styles.stateValue}>{state.cases}</Text>

                            <TouchableOpacity style={styles.detailsButton} 
                            onPress={() => navigateToDetail(state)}>
                                <Text style={styles.detailsButtonText}>
                                Ver mais detalhes</Text>
                                <Feather name="arrow-right" size={16} color="#f76981"/>
                                    
                            </TouchableOpacity>
                        </View>
                    )}
                    />
            </View>
    );
}
}