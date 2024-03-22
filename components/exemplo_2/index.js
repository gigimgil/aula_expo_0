import {View, Text} from 'react-native';

import styles from './styles';

function Exemplo2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo2</Text>

            <View style={styles.viewmensagem}>
            <Text style={styles.mensagem}>Olá Giulia!!</Text>
            </View>
            
            <Text style={styles.mensagem}>Olá outra pessoa!!</Text>
        </View>
    );
}

export default Exemplo2;