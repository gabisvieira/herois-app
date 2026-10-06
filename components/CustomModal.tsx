import { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSave: (heroi: {
    nome: string;
    classe: string;
  }) => void;
};

export default function CustomModal({
  visible,
  onClose,
  onSave,
}: Props) {
  const [nome, setNome] = useState('');
  const [classe, setClasse] = useState('');

  function salvarHeroi() {
    if (nome.trim() === '' || classe.trim() === '') {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );
      return;
    }

    onSave({
      nome: nome,
      classe: classe,
    });

    setNome('');
    setClasse('');
  }

  function fecharModal() {
    setNome('');
    setClasse('');
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.fundo}>
        <View style={styles.modal}>

          <TouchableOpacity
            style={styles.fechar}
            onPress={fecharModal}
          >
            <Text style={styles.x}>X</Text>
          </TouchableOpacity>

          <Image
            source={require('../assets/avatar.png')}
            style={styles.avatar}
          />

          <Text style={styles.titulo}>
            Novo Herói
          </Text>

          <Text style={styles.label}>
            Nome
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite o nome"
            placeholderTextColor="#9B8BA8"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>
            Classe
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite a classe"
            placeholderTextColor="#9B8BA8"
            value={classe}
            onChangeText={setClasse}
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={salvarHeroi}
          >
            <Text style={styles.textoBotao}>
              Salvar Herói
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '85%',
    backgroundColor: '#24113D',
    borderRadius: 20,
    padding: 25,
  },

  fechar: {
    position: 'absolute',
    right: 18,
    top: 15,
  },

  x: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'PoppinsBold',
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignSelf: 'center',
    marginBottom: 15,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'PoppinsBold',
    textAlign: 'center',
    marginBottom: 20,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'PoppinsSemiBold',
    marginBottom: 5,
  },

  input: {
    backgroundColor: '#362250',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#8B5CF6',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'PoppinsSemiBold',
  },
});