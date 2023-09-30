import { useState } from 'react'
import { View, Text, Button } from 'react-native'
import {styles} from './styles'


export default function App(){
  const [contador, setContador] = useState(0)


  function atualizarContador(incrementar){
    if (incrementar)
      setContador(contador+1)
    else if (contador > 0)
      setContador(contador-1)
  }


  return(
    <View>
      <Text style={styles.titulo}>Contador de Pessoas</Text>


      <Text style={styles.contador}>{contador}</Text>


      <Button title='+' color='green' onPress={() => atualizarContador(true)}/>


      <Button title='-' color='red' onPress={() =>atualizarContador(false)}/>
    </View>
  )
}

