import {View, Text} from 'react-native';

import Mensagem from './mensagem';

import styles from './styles';

function Exemplo2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo2</Text>

            <Mensagem nome='Giulia' sobrenome='Modesto'/>
            <Mensagem nome='Guilherme' idade={16}/>
            <Mensagem nome='Giugui'/>
        </View>
    );
}

export default Exemplo2;