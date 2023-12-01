import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import api from '../Services/api';
import styles from './style';
import { useEffect, useState } from 'react';
export default function App({ route, navigation }) {
  const { value } = route.params || {};
  const [data, setData] = useState(null);

  const searchUrl = async (city) => {
    const response = await api.get('/' + city + '&aqi=yes' + '/json');

    setData({
      name: response.data.location.name,
      country: response.data.location.country,
      temp: response.data.current.temp_c,
      img: response.data.current.condition.icon,
      clime: response.data.current.condition.text,
    });
  };

  function renderClime() {
    if (data) {
      return (
        <View>
          <View style={styles.header}>
            <Text style={styles.headerText}>Weather forecast</Text>
          </View>
          <View style={styles.weatherContainer}>
            <Image
              source={{ uri: 'http:' + data.img }}
              style={styles.weatherIcon}
            />
            <Text style={styles.temperature}>{data.temp} Cº</Text>
            <Text style={styles.description}>{data.clime}</Text>
            <Text style={styles.location}>
              {data.name}, {data.country}
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.header}>
          <Text style={styles.headerText}>Weather forecast</Text>
        </View>
      );
    }
  }
  
  useEffect(() => {
    if (value) {
      searchUrl(value);
    }
  }, [value]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>{renderClime()}</View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Previsão Baixada App</Text>
      </View>
    </View>
  );
}
