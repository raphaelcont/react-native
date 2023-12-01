// Cidade.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cidade = () => {
  return (
    <View style={styles.container}>
      <Text>Cidade Screen</Text>
      {/* Seu conteúdo da tela de Cidade vai aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cidade;
