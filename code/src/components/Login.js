import React, { Component } from 'react';
import { View, TextInput, Image, Text, Button,
        StyleSheet, Animated, Keyboard, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import logo from '../images/logo.png';


const IMAGE_HEIGHT_LARGE = 200
const IMAGE_HEIGHT_SMALL = 100

class IconTextInput extends Component {
  render() {
    return(
      <View style={styles.inputWrap}>
        <View style={styles.iconWrap}>
          <Icon
            name={this.props.iconName}
            style={styles.icon}
            size={20}
            color="#FFF"
          />
        </View>
        <TextInput
          placeholder={this.props.placeholder}
          style={styles.input}
          underlineColorAndroid="transparent"
        />
      </View>
    )
  }
}

export default class LoginScreen extends Component {

  constructor(props) {
    super(props)

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT_LARGE)
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove()
    this.keyboardWillHideSub.remove()
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL
    }).start()
  }

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_LARGE
    }).start()
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View>
          <Animated.Image source={logo} style={[styles.logo, {height: this.imageHeight}]} />
          <Text style={styles.motto}>make sustainable choices</Text>
          <IconTextInput
            iconName="user"
            placeholder="Username"
          />
          <IconTextInput
            iconName="lock"
            placeholder="Password"
          />
          <View style={styles.formButtons}> 
            <Button
              title="Sign in"
              onPress={ () => this.props.navigation.navigate('drawerStack', {title:'Home'}) }
              style={styles.formButton}
              color="#9ECF62"
             />
            <Text>{'\n'}</Text>
            <Button
              title="Sign up"
              onPress={ () => this.props.navigation.navigate('Signup') }
              style={styles.formButton}
              color="#9ECF62"
             />
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
  },
  motto: {
    color: "#000",
    backgroundColor: "transparent",
    textAlign: "center",
    fontStyle: 'italic',
    fontSize: 15,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 20,
    height: 40,
    width: 300,
    backgroundColor: "transparent",
    alignSelf:'center'
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFF'
  },
  iconWrap: {
    paddingHorizontal: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9ECF62"
  },
  icon: {
    width: 20,
    height: 20,
  },
  formButtons: {
    alignItems: "center",
    justifyContent: "center",
  }
});
