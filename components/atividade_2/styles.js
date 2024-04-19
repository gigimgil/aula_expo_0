import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'pink',
        height:'100%',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        padding:8,
    },
    titulo:{
        fontSize:30,
        fontWeight:'',
        marginVertical:20,
        color: 'violet',

    },
    mensagem: {
        fontSize:25,
        margin:10,
        color: 'violet',
    },
    viewmensagem: {
        borderWidth:2,
        borderColor:'violet',
        borderRadius:20,
    }
});

export default styles;