import {View, Text} from 'react-native';

import Mensagem from './mensagem';

import styles from './styles';

function Exemplo2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>cantor e musica favorita</Text>

            <Mensagem cantor='Lana del rey' musica='Ride'/>
            <Mensagem cantor='Melanie Martinez' musica='Carrousel'/>
            <Mensagem cantor='Giugui'musica='' />
        </View>
    );
}

export default Exemplo2;