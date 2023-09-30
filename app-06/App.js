import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(null);
  const [resultado, setResultado] = useState('');

  const gerarNumeroAleatorio = () => {
    const numero = Math.floor(Math.random() * 11); // Gera números de 0 a 10
    setNumeroAleatorio(numero);
    setResultado('Número gerado! Tente adivinhar.');
  };

  const verificarNumero = () => {
    if (numeroAleatorio === null) {
      setResultado('');
    } else {
      setResultado(`O número gerado foi: ${numeroAleatorio}`);
      setNumeroAleatorio(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: 'orange', fontSize: 25, marginHorizontal: 35, marginVertical: 20 }}>
        Jogo do Número Aleatório (0-10)
      </Text>
      <Image
        source={{ uri: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f3ae.png'}}
        style={{ width: 100, height: 100, margin: 90 }}
      />
      <Button
        title="Pense em um número de 0 a 10"
        onPress={gerarNumeroAleatorio}
        color="blue"

      />
      <Button
        title="Verificar Número"
        onPress={verificarNumero}
        color="red" 
      />

      <Text style={{ color: 'green', fontSize: 20, marginHorizontal: 25, marginVertical: 25 }}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 25,
  },
});


