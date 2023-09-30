import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

function App() {
  let initial_feed = [
  { id: 1, titulo: 'Vaga de Desenvolvedor',salario: '800.600,01', descricao: 'São paulo', contato: 'eita_po@gmail.com'} ,
  { id: 2, titulo: 'Analista de Marketing', salario: '7600', descricao: 'Praia Grande', contato: 'empresa_boa@gmail.com'},
  { id: 3, titulo: 'Designer Gráfico',salario: '2000', descricao: 'São paulo', contato: 'eita_po@gmail.com'},
  { id: 4, titulo: 'Gerente de Projetos', salario: '7600', descricao: 'Praia Grande', contato: 'empresa_boa@gmail.com'},
  { id: 5, titulo: 'Engenheiro de Software', salario: '2600', descricao: 'São Paulo', contato: 'empresaxtudo@gmail.com' },
  { id: 6, titulo: 'Vaga 6', salario: '7600', descricao: 'Rio de Janeiro', contato: 'contato_vaga6@gmail.com' },
  { id: 7, titulo: 'Vaga 7', salario: '21600', descricao: 'Bahia', contato: 'contato_vaga7@gmail.com' },
  { id: 8, titulo: 'Vaga 8', salario: '8600', descricao: 'Chamar no contato', contato: 'contato_vaga8@gmail.com' },
  { id: 9, titulo: 'Vaga 9', salario: '9600', descricao: 'Vaga ruim', contato: 'contato_vaga9@gmail.com' },
  { id: 10, titulo: 'Vaga 10', salario: '3600', descricao: 'Só Corinthiano', contato: 'contato_vaga10@gmail.com' },
  { id: 11, titulo: 'Analista de Dados', salario: '4600', descricao: 'Apenas Santistas', contato: 'contato_vaga11@gmail.com' },
  { id: 12, titulo: 'Desenvolvedor Web', salario: '2600', descricao: 'Só Trikas', contato: 'contato_vaga12@gmail.com' },
  { id: 13, titulo: 'Analista de Sistemas', salario: '2600', descricao: '', contato: 'contato_vaga13@gmail.com' },
  { id: 14, titulo: 'Designer UX/UI', salario: '2600', descricao: 'Santos', contato: 'contato_vaga14@gmail.com' },
  { id: 15, titulo: 'Engenheiro de Software', salario: '2600', descricao: 'Descrição da Vaga 15', contato: 'contato_vaga15@gmail.com' },
  { id: 16, titulo: 'Administrador de Banco de Dados', salario: '2600', descricao: 'Bahia', contato: 'contato_vaga16@gmail.com' },
  { id: 17, titulo: 'Analista de Segurança da Informação', salario: '2600', descricao: 'Santos', contato: 'contato_vaga17@gmail.com' },
  { id: 18, titulo: 'Desenvolvedor Mobile', salario: '4600', descricao: 'Santos', contato: 'contato_vaga18@gmail.com' },
  { id: 19, titulo: 'Analista de Redes', salario: '2600', descricao: 'Santos', contato: 'contato_vaga19@gmail.com' },
  { id: 20, titulo: 'Arquiteto de Software', salario: '12600', descricao: 'Santos', contato: 'contato_vaga20@gmail.com' },
  ];

  const [vagas, setVagas] = useState(initial_feed);

  return (
    <View style={styles.container}>
      <Text style={styles.appTitulo}>VAGAS</Text>
      <FlatList
        data={vagas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Vaga data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  appTitulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginBottom: 20,
  },
  vagaContainer: {
    backgroundColor: '#f0f0f0',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  vagaTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  vagaDetalhes: {
    fontSize: 16,
    marginTop: 5,
  },
});

function Vaga(props) {
  return (
    <View style={styles.vagaContainer}>
      <Text style={styles.vagaTitulo}>{props.data.titulo}</Text>
      <Text style={styles.vagaDetalhes}>Salario: {props.data.salario}</Text>
      <Text style={styles.vagaDetalhes}>Descrição: {props.data.descricao}</Text>
      <Text style={styles.vagaDetalhes}>Contato: {props.data.contato}</Text>
    </View>
  );
}

export default App;
