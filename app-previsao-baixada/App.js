import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Search from './src/Search/index';
import Previsao from './src/Previsao/index';
import Cidade from './src/telas/Cidade/index';
import Umidade from './src/telas/Umidade/index';
import Vento from './src/telas/Vento/index';
export default function App() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer style={styles.menu}>
        <Tab.Navigator>
          <Tab.Screen name="HOME" component={Search} />
          <Tab.Screen name="Previsao" component={Previsao} />
          <Tab.Screen name="Cidade" component={Cidade} />
          <Tab.Screen name="Vento" component={Umidade} />
          <Tab.Screen name="Umidade" component={Vento} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  }
});

