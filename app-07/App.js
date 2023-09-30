
import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Switch, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('Masculino');
  const [escolaridade, setEscolaridade] = useState('Ensino Médio');
  const [limiteConta, setLimiteConta] = useState(1000);
  const [brasileiro, setBrasileiro] = useState(true);
  const [dadosExibidos, setDadosExibidos] = useState(false);

  const confirmarDados = () => {
    setDadosExibidos(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Abertura de Conta Bancária</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={(text) => setIdade(text)}
      />
      <Picker
        style={styles.input}
        selectedValue={sexo}
        onValueChange={(itemValue) => setSexo(itemValue)}
      >
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
      </Picker>
      <Picker
        style={styles.input}
        selectedValue={escolaridade}
        onValueChange={(itemValue) => setEscolaridade(itemValue)}
      >
        <Picker.Item label="Ensino Médio" value="Ensino Médio" />
        <Picker.Item label="Graduação" value="Graduação" />
        <Picker.Item label="Pós-Graduação" value="Pós-Graduação" />
      </Picker>
      <Text style={styles.label}>Limite na Conta: R$ {limiteConta.toFixed(2)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={5000}
        step={100}
        value={limiteConta}
        onValueChange={(value) => setLimiteConta(value)}
      />
      <Text style={styles.label}>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>
      <Switch
        style={styles.switch}
        value={brasileiro}
        onValueChange={(value) => setBrasileiro(value)}
      />
      <Button title="Confirmar" onPress={confirmarDados} />
      {dadosExibidos && (
        <View style={styles.dadosExibidos}>
          <Text>Dados Informados:</Text>
          <Text>Nome: {nome}</Text>
          <Text>Idade: {idade}</Text>
          <Text>Sexo: {sexo}</Text>
          <Text>Escolaridade: {escolaridade}</Text>
          <Text>Limite na Conta: R$ {limiteConta.toFixed(2)}</Text>
          <Text>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 5,
  },
  label: {
    marginTop: 10,
  },
  slider: {
    width: '100%',
    marginBottom: 10,
  },
  switch: {
    marginBottom: 10,
  },
  dadosExibidos: {
    marginTop: 20,
  },
});
