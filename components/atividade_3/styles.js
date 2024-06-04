import { StyleSheet} from 'react-native';
import { inline } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler';

const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor:'pink',
    borderRadius: 20,
    width:'100%',
    alignItems:'center',
},

container2: {
  display: 'flex',
  flexDirection:'row',
  width: '15%',
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
    width:'40%',
    borderRadius:20,
    alignItems:'center',
    borderColor:'violet',
    margin:10,
},


txtBotao: {
    fontSize:25,
    color: 'violet',
},

botaoPress: {
    backgroundColor:'purple',
},

txtNumero:{
    fontSize:35,
    color: 'violet',
    marginVertical:10,

},

});
export default styles;