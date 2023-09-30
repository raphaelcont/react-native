import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/99900060?v=4' }}
          style={styles.image}
        />
        <Text style={styles.title}>Dados Pessoais</Text>
        <Text style={styles.text}>123456-789</Text>
        <Text style={styles.title}>Formação</Text>
        <Text style={styles.text}>Fatec-pg</Text>
        <Text style={styles.title}>Experiencia</Text>
        <Text style={styles.text}>Estudante</Text>
        <Text style={styles.title}>Projetos</Text>
        <Text style={styles.text}>Meu Primeiro Projeto</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
  title: {
    color: 'black',
    fontSize: 25,
    marginHorizontal: 25,
  },
  text: {
    color: 'black',
    fontSize: 15,
    marginLeft: 0,
  },
});

export default App;

