import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

import Dashboard from './src/pages/Dashboard';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Gallery from './src/pages/Gallery';

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
    inactiveTintColor: 'lightgray',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#508CA4',
      borderTopWidth: 1,
      borderTopColor: '#508CA4'
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
  }, Gallery: {
    screen: Gallery
  }
}, {
  initialRouteName: 'Home',
  headerLayoutPreset: 'center',
  headerBackTitleVisible: false,
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#508CA4',
      height: 5,
    },
    headerLeft: null
  }
}
);

export default createAppContainer(AppNavigator);
