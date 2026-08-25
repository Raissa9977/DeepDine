import React, { useState } from 'react';
import SplashScreen from './splash';
import CadastroScreen from './cadastro';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('splash');

  if (telaAtual === 'splash') {
    return <SplashScreen onApertar={() => setTelaAtual('cadastro')} />;
  }

  return <CadastroScreen onVoltarSplash={() => setTelaAtual('splash')} />;
}
