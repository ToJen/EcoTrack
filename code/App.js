import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';
import LoginScreen from './src/components/Login';
import SignupScreen from './src/components/Signup';
import HomeScreen from './src/components/Home';
import ScanScreen from './src/components/Scan';


const DrawerStack = DrawerNavigator({
  Home: {
    screen : HomeScreen, 
    navigationOptions: {
      drawerIcon: () => (<Icon name="home" size={20} color="#000" />)
    }
  },
  Scan: {
    screen : ScanScreen, 
    navigationOptions: {
      title: 'Scan Items',
      drawerIcon: () => (<Icon name="camera" size={20} color="#000" />)
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
      headerLeft: <Icon name="menu" size={30} 
                        color="#FFF" style={{padding: 5}} 
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

const LoginStack = StackNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen }
  }, {
    headerMode: 'none',
  }
);

const PrimaryNav = StackNavigator(
  {
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigation }
  }, {
    headerMode: 'none',
    initialRouteName: 'loginStack'
  }
);

export default PrimaryNav;
