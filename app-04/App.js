import React, { useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularRelacao = () => {
    const resultadoRelacao = parseFloat(numero1) / parseFloat(numero2);
    setResultado(`Resultado: ${resultadoRelacao}`);
    
    if (resultadoRelacao <= 0.7) {
      setResultado(`Compensa Etanol `);
    } else {
      setResultado(`Compensa Gasolina `);
    }
  };

  return (
     
    <View style={styles.container}>

     <Text style={{ color: 'orange', fontSize: 25, marginHorizontal: 35, marginVertical: 20 }}>
        Alcool ou Gasolina
      </Text>
    <Image
        source={{ uri: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/26fd.png'}}
        style={{ width: 100, height: 100, margin: 100 }}
      />
      <Text style={{ color: 'orange', fontSize: 20, marginHorizontal: 15, marginVertical: 25 }}>
        Calculadora de Combustível
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        value={numero1}
        onChangeText={(text) => setNumero1(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço do Etanol"
        keyboardType="numeric"
        value={numero2}
        onChangeText={(text) => setNumero2(text)}
      />

      <Button title="Calcular" onPress={calcularRelacao}  />
    
      <Text style={{ color: 'green', fontSize: 20, marginHorizontal: 55, marginVertical: 25 }}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: '',
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
