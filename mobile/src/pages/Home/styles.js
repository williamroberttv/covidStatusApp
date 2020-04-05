import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor:"#fff",
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },
    headerTextBold: {
        fontWeight: 'bold',
    },

    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },

     description: {
        fontSize: 18,
        lineHeight: 24,
        color: '#737380',
        marginBottom: 32,
    },

    stateList: {
        marginTop: 32,
    },

    states: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        marginBottom: 16,
    },

    stateProperty:{
        fontSize:14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    stateValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        color: '#f76981',
        fontSize: 15,
        fontWeight: 'bold',
    },
});