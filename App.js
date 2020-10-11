import React from 'react';
import { Button, Image } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import MenuScreen from './pages/MenuScreen';
import DetailsScreen from './pages/DetailsScreen';
import StaffScreen from './pages/StaffScreen';
import CustomerScreen from './pages/CustomerScreen';
import ProductScreen from './pages/ProductScreen';

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
    CustomerList: { screen: CustomerScreen },
    StaffView: { screen: StaffScreen },
    ProductsList: { screen: ProductScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#66CCCC',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
    },
  }
);

const MenuStack = createStackNavigator(
  {
    Menu: { screen: MenuScreen },   
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#66CCCC',
      },
      headerTintColor: '#FFFFFF',
      title: 'Menu',
    },
  }
);

const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Menu: { screen: MenuStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={
                focused
                  ? require('./asset/logo1.png')
                  : require('./asset/logo1.png')
              }
              style={{
                width: 30,
                height: 30,
                borderRadius: 60 / 2,
              }}
            />
          );
        } else if (routeName === 'Menu') {
          return (
            <Image
              source={
                focused
                  ? require('./asset/logo4.png')
                  : require('./asset/logo4.png')
              }
              style={{
                width: 25,
                height: 25,
                borderRadius: 60 / 2,
              }}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: '#000000',
    },
  }
);
export default createAppContainer(App);