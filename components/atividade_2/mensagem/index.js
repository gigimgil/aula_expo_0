import { View, Text } from 'react-native';

import styles from './styles';

export default function Mensagem({cantor,musica = ''}) {
    return (
        <View style={styles.viewmensagem}>
            <Text style={styles.mensagem}>{`Cantor: ${cantor} Musica: ${musica}`}</Text>
        </View>
    );
}