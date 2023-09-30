import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura);

    if (!isNaN(pesoFloat) && !isNaN(alturaFloat) && alturaFloat > 0) {
      const imcCalculado = pesoFloat / (alturaFloat * alturaFloat);
      setResultado(`Seu IMC é: ${imcCalculado.toFixed(2)}`);

      if (imcCalculado < 18.5) {
        setResultado('Abaixo do peso');
      } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
        setResultado('Peso normal');
      } else if (imcCalculado >= 24.9 && imcCalculado < 29.9) {
        setResultado('Sobrepeso');
      } else {
        setResultado('Obesidade');
      }
    } else {
      setResultado('Por favor, insira valores válidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: 'orange', fontSize: 25, marginHorizontal: 25, marginVertical: 20 }}>
        Calculadora de IMC
      </Text>
      <Image
        source={{ uri: 'https://static.tuasaude.com/media/article/a8/l9/obesidade-e-cirurgia-bariatrica_13557_l.jpg'}}
        style={{ width: 150, height: 200, margin: 70 }}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={(text) => setPeso(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={(text) => setAltura(text)}
      />

      <Button title="Calcular IMC" onPress={calcularIMC} />

      <Text style={{ color: 'green', fontSize: 20, marginHorizontal: 70, marginVertical: 25 }}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 25,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});
