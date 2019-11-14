    
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import halamanUtama from './src/HalamanUtama';
import barangMain from './src/BarangMain';
import barangRead from './src/BarangRead';
import barangEdit from './src/BarangEdit';
import konsumenMain from './src/KonsumenMain';
import konsumenRead from './src/KonsumenRead';
import konsumenEdit from './src/KonsumenEdit';
import muatanMain from './src/MuatanMain';
import muatanRead from './src/MuatanRead';
import muatanEdit from './src/MuatanEdit';



const RootStack = createStackNavigator(
  {
    halamanUtama: {
      screen: halamanUtama,
      navigationOptions: {

      }
    },

    barangEdit: {
      screen: barangEdit,
      navigationOptions: {

      }
    },    
    barangMain: {
      screen: barangMain,
      navigationOptions: {

      }
    },

    barangRead: {
      screen: barangRead,
      navigationOptions: {

      }
    },

    konsumenMain: {
      screen: konsumenMain,
      navigationOptions: {

      }
    },
    konsumenRead: {
      screen: konsumenRead,
      navigationOptions: {

      }
    },

    konsumenEdit: {
      screen: konsumenEdit,
      navigationOptions: {

      }
    },
    muatanMain: {
      screen: muatanMain,
      navigationOptions: {

      }
    },
    muatanRead: {
      screen: muatanRead,
      navigationOptions: {

      }
    },

    muatanEdit: {
      screen: muatanEdit,
      navigationOptions: {

      }
    },
    
  },
  {
    initialRouteName: 'halamanUtama', // ini root
  }
);

const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {

  render() {
    return <AppContainer />;
  }
}

