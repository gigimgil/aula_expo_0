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
  alignItems:'center',
},

titulo:{
    fontSize:30,
    fontWeight:'bold',
    marginVertical:20,
    color: 'violet',
    alignItems:'center',
},

botao:{
    borderWidth:3,
    padding:10,
    width:100,
    borderRadius:20,
    alignItems:'center',
    borderColor:'violet',
    margin:10,
    height:65,
},


txtBotao: {
    fontSize:25,
    color: 'violet',
    alignItems:'center',
},

botaoPress: {
    backgroundColor:'purple',
    alignItems:'center',
},

txtNumero:{
    fontSize:55,
    color: 'violet',
    alignItems:'center',
    marginVertical:10,

},

});
export default styles;