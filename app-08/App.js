import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const App = () => {
  const [produtos, setProdutos] = useState([
    {
      id: '1',
      nome: 'Motorola',
      preco: '$10.99',
      classificacao: '4.5',
      imagem: 'https://br.celulares.com/fotos/huawei-p40-lite-86112-g-alt.jpg',
    },
    {
      id: '2',
      nome: 'Samsung',
      preco: '$15.99',
      classificacao: '4.2',
      imagem: 'https://br.celulares.com/fotos/huawei-p40-lite-86112-g-alt.jpg',
    },
    {
      id: '3',
      nome: 'LG',
      preco: '$19.99',
      classificacao: '4.7',
      imagem: 'https://br.celulares.com/fotos/huawei-p40-lite-86112-g-alt.jpg',
    },
  ]);

  const adicionarProduto = () => {
    // Lógica para adicionar um novo produto
  };

  const renderProduto = ({ item }) => (
    <TouchableOpacity style={styles.produto}>
      <Image source={{ uri: item.imagem }} style={styles.imagemProduto} />
      <Text style={styles.nomeProduto}>{item.nome}</Text>
      <Text style={styles.precoProduto}>{item.preco}</Text>
      <Text style={styles.classificacaoProduto}>Classificação: {item.classificacao}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Anúncio</Text>
      <ScrollView horizontal>
        {produtos.map((item) => (
          <View key={item.id} style={styles.produtoContainer}>
            <TouchableOpacity style={styles.produto}>
              <Image source={{ uri: item.imagem }} style={styles.imagemProduto} />
              <Text style={styles.nomeProduto}>{item.nome}</Text>
              <Text style={styles.precoProduto}>{item.preco}</Text>
              <Text style={styles.classificacaoProduto}>Classificação: {item.classificacao}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  produtoContainer: {
    width: 300,
    marginLeft: 20,
  },
  produto: {
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  imagemProduto: {
    width: 150,
    height: 350,
    alignSelf: 'center',
  },
  nomeProduto: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  precoProduto: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
    marginTop: 5,
  },
  classificacaoProduto: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default App;
