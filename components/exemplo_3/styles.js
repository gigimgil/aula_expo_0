import { StyleSheet} from 'react-native';

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
botao:{
    borderWidth:3,
    padding:10,
    width:'80%',
    borderRadius:20,
    alignItems:'center',
    borderColor:'violet',
},
txtBotao: {
    fontSize:25,
    color: 'violet',
},
botaoPress: {
    backgroundColor:'purple',
},

});
export default styles;