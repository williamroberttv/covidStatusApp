import { StyleSheet } from 'react-native';
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
        alignItems: 'center',
    },

    state:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#F9F9F9',
        marginBottom: 16,
        marginTop: 40,
    },

    stateProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },

    stateValue:{
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
    },
}
)