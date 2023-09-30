import { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import {styles} from './styles'




export default function App(){
  const [n1, setN1] = useState()
  const [n2, setN2] = useState()
  const [resultado, setResultado] = useState()
  

  const calcularResultado = () => {
    const multiplicacao = parseInt(n1) * parseInt(n2);
    setResultado(`Resultado: ${multiplicacao}`);
  };


  return(
    <View>
      <Text style={styles.titulo}>Multiplicação de Números</Text>


      <TextInput
      style={styles.input}
      placeholder="Digite o primeiro número"
      onChangeText={setN1}
      />


      <TextInput
      style={styles.input}
      placeholder="Digite o segundo número"
      onChangeText={setN2}
      />




  <Button title='Calcular' color='blue' onPress={calcularResultado} />

      <Text style={styles.contador}>{resultado}</Text>
    </View>
  )
}
