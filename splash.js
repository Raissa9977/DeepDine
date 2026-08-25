import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ onApertar }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>DeepDine</Text>
        <Text style={styles.subtitle}>Gastronomia nas Profundezas</Text>

        <Text style={styles.tapToContinue} onPress={onApertar}>
          Toque aqui para acessar
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>v1.0 - Raissa Viana</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2443A3',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#B4BEE0',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 8,
  },
  tapToContinue: {
    fontSize: 14,
    color: '#B4BEE0',
    marginTop: 40,
    textDecorationLine: 'underline',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
