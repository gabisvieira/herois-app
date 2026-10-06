import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

type Props = {
  nome: string;
  classe: string;
  onDelete: () => void;
};

export default function HeroiCard({
  nome,
  classe,
  onDelete,
}: Props) {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/avatar.png')}
        style={styles.avatar}
      />

      <View style={styles.info}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.classe}>{classe}</Text>
      </View>

      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.excluir}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#24113D',
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  info: {
    flex: 1,
    marginLeft: 15,
  },

  nome: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'PoppinsBold',
  },

  classe: {
    color: '#B9ADC4',
    fontSize: 14,
    fontFamily: 'Poppins',
    marginTop: 3,
  },

  excluir: {
    fontSize: 22,
  },
});