import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from './src/components/Login';
import SignupScreen from './src/components/Signup';
import HomeScreen from './src/components/Home';


const DrawerStack = DrawerNavigator({
  Home: {
    screen : HomeScreen, 
    navigationOptions: {
      drawerIcon: () => (<Icon name="home" size={20} color="#000" />)
    }
  }
})

const DrawerNavigation = StackNavigator(
  {
    DrawerStack: { screen: DrawerStack }
  },
  {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#9ECF62'},
      title: `${navigation.state.params.title}`,
      headerLeft: <Icon name="navicon" size={30} 
                        color="#e7ff6e" style={{padding: 5}} 
                        onPress={() => {
                                  if (navigation.state.index === 0) {
                                    navigation.navigate('DrawerOpen')
                                  } else {
                                    navigation.navigate('DrawerClose')
                                  }
                                }} 
                  />
    
    }),
  }
);

const LoginStack = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  SignupScreen: { screen: SignupScreen }
}, {
  headerMode: 'none',
/*  navigationOptions: {
    headerStyle: {backgroundColor: 'red'},
    title: 'You are not logged in'
  } */
});

const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'loginStack'
})

export default PrimaryNav
