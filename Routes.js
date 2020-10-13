import React from 'react';
import { createSwitchNavigator, createAppContainer, createStackNavigator, } from 'react-navigation';
import Splash from './src/pages/Splash'
import Home from './src/pages/Home'
import Login from './src/pages/Login'
import Tutorial from './src/pages/Tutorial'
import TiraFoto from './src/pages/TiraFoto'
import TiraFotoRg from './src/pages/TiraFotoRg'
import TiraFotoCnh from './src/pages/TiraFotoCnh'
import Sucesso from './src/pages/Sucesso'
import Header from './src/components/Header';


const AppNavigator = createSwitchNavigator(
    {
        Splash: { screen: Splash, },
        Home: { screen: Home },
        Login: { screen: Login },
        Tutorial: { screen: Tutorial, },
        TiraFoto: { screen: TiraFoto, },
        TiraFotoRg: { screen: TiraFotoRg, },
        TiraFotoCnh: { screen: TiraFotoCnh, },
        Sucesso: { screen: Sucesso, },


    },
    { initialRouteName: 'Splash' }

);

export default createAppContainer(AppNavigator);