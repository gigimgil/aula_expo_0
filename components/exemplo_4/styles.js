import{StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'pink',
        borderRadius: 20,
        width:'100%',
        alignItems:'center',
    },
    titulo:{
        fontSize:30,
        fontWeight:'bold',
        marginVertical:20,
        color: 'violet',
    },
    input:{
        fontSize:25,
        fontWeight:'bold',
        marginVertical:0,
        color: 'violet',
        width:'80%',
        borderColor:'violet',
        borderWidth:2,
        padding:5,
        borderRadius:20,
    },
    texto:{
        fontSize:30,
        fontWeight:'bold',
        marginVertical:5,
        width:'80%',
        color: 'violet',
    },

});
export default styles;