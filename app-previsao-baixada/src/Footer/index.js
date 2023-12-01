import { Text, View, TouchableOpacity, TextInput,Linking } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

import styles from './style';
import * as Localization from 'expo-localization';
import { useEffect, useState } from 'react';

export default function App() {
  
   const linkedin = () => {
    Linking.openURL('https://www.linkedin.com');
  };
    const gitHub = () => {
    Linking.openURL('https://github.com/raphaelcont');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={linkedin}>
        <Ionicons
          name="logo-linkedin"
          size={40}
          color="white"
          style={styles.icons}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={gitHub}>
      <Ionicons
        name="logo-github"
        size={40}
        color="white"
        style={styles.icons}
      />
      </TouchableOpacity>
    </View>
  );
}
