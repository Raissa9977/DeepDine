import React, { useState } from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#88A0E0"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#88A0E0"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <Text 
          style={styles.button} 
          onPress={() => alert('Dados de login enviados com sucesso!')}
        >
          Entrar
        </Text>

        <Text 
          style={styles.linkText} 
          onPress={() => alert('Solicitação de recuperação enviada por e-mail!')}
        >
          Esqueci a senha
        </Text>

        <Text 
          style={styles.linkText} 
          onPress={() => alert('Redirecionando para a criação de conta...')}
        >
          Criar conta
        </Text>
      </View>

      {/* Rodapé */}
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
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  header: {
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#B4BEE0',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 4,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 13,
    color: '#FFFFFF',
    marginBottom: 4,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#19317A',
    color: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#385BBF',
  },
  button: {
    backgroundColor: '#B4BEE0',
    color: '#172A66',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 8,
    marginBottom: 12,
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 13,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 10,
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
