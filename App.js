import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/components/Home';
import Login from './src/components/Login';
import Dificuldade from './src/components/Dificuldade';
import Cadastro from './src/components/Cadastro';

//Não exibir warnings
console.disableYellowBox = true

//Navegação
//Listar as telas possíveis de navegar e onde inicia
const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  Dificuldade: {
    screen: Dificuldade
  },
  Cadastro: {
    screen: Cadastro
  }
}, {
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
