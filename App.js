import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

import Dashboard from './src/pages/Dashboard';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Gallery from './src/pages/Gallery';
import Level from './src/pages/Level';
import HardQuestions from './src/pages/HardQuestions';
import EasyQuestions from './src/pages/EasyQuestions';
import EndGame from './src/pages/EndGame'


//Não exibir warnings
console.disableYellowBox = true

//Navegação
//Listar as telas possíveis de navegar e onde inicia
const TabNavigator = createMaterialTopTabNavigator({
  Login: SignIn,
  Cadastro: SignUp
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    pressColor: 'lightgray',
    pressOpacity: 'lightgray',
    labelStyle: {
      fontSize: 14,
    },
    style: {
      backgroundColor: '#508CA4',
    },
    indicatorStyle: {
      backgroundColor: 'lightgray',

    }
  }
}
);

const AppNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator
  },
  Dashboard: {
    screen: Dashboard
  },
  Gallery: {
    screen: Gallery
  },
  Level: {
    screen: Level
  },
  HardQuestions: {
    screen: HardQuestions
  },
  EasyQuestions: {
    screen: EasyQuestions
  },
  EndGame: {
    screen: EndGame
  }
}, {
  initialRouteName: 'Home',
  headerLayoutPreset: 'center',
  headerBackTitleVisible: false,
  defaultNavigationOptions: {

    headerStyle: {
      backgroundColor: '#508CA4',
      height: 1
    },
    headerLeft: null,
  }
}
);

export default createAppContainer(AppNavigator);
