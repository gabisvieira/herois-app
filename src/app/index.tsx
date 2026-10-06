import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import HeroiCard from '../../components/HeroiCard';
import CustomModal from '../../components/CustomModal';

interface Heroi {
  id: string;
  nome: string;
  classe: string;
}

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [heroes, setHeroes] = useState<Heroi[]>([]);

  function adicionarHeroi(heroi: { nome: string; classe: string }) {
    const novoHeroi = {
      id: Date.now().toString(),
      nome: heroi.nome,
      classe: heroi.classe,
    };

    setHeroes([...heroes, novoHeroi]);
    setModalVisible(false);
  }

  function excluirHeroi(id: string) {
    const novaLista = heroes.filter((heroi) => heroi.id !== id);
    setHeroes(novaLista);
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Criador de Heróis</Text>

        <Text style={styles.subtitle}>
          Cadastre seus heróis para formar uma equipe!
        </Text>
      </View>

      {heroes.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>🛡️</Text>

          <Text style={styles.emptyTitle}>
            Nenhum herói cadastrado
          </Text>

          <Text style={styles.emptyText}>
            Sua lista
            ainda está vazia.
            {'\n'}
            Cadastre seu primeiro herói!
          </Text>
        </View>
      ) : (
        <FlatList
          data={heroes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HeroiCard
              nome={item.nome}
              classe={item.classe}
              onDelete={() => excluirHeroi(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>
          + Cadastrar Herói
        </Text>
      </TouchableOpacity>

      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={adicionarHeroi}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101322',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    marginBottom: 25,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontFamily: 'PoppinsBold',
  },

  subtitle: {
    color: '#B9ADC4',
    fontSize: 14,
    fontFamily: 'Poppins',
    marginTop: 5,
  },

  list: {
    paddingBottom: 100,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
  },

  emptyIcon: {
    fontSize: 50,
    marginBottom: 15,
  },

  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'PoppinsBold',
    textAlign: 'center',
  },

  emptyText: {
    color: '#B9ADC4',
    fontSize: 14,
    fontFamily: 'Poppins',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 22,
  },

  addButton: {
    position: 'absolute',
    bottom: 60,
    left: 20,
    right: 20,
    backgroundColor: '#8B5CF6',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'PoppinsSemiBold',
  },
});