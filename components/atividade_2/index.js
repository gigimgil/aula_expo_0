import {View, Text} from 'react-native';

import Mensagem from './mensagem';

import styles from './styles';

function Exemplo2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>cantor e musica favorita</Text>

            <Mensagem cantor='Lana del rey' musica='Ride'/>
            <Mensagem cantor='Melanie Martinez' musica='Carrousel'/>
            <Mensagem cantor='Mitski'musica='liquid smooth' />
            <Mensagem cantor='Ariana Grande'musica='God is a woman' />
            <Mensagem cantor='Tim maia'musica='Eu amo voce' />
            <Mensagem cantor='Taylor swift'musica='lover' />
            <Mensagem cantor='Olivia rodrigo'musica='brutal' />
        </View>
    );
}

export default Exemplo2;