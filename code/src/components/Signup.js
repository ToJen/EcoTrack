import React, { Component } from 'react';
import { View, TextInput, Image, Text, 
         Button, StyleSheet, KeyboardAvoidingView } from 'react-native';


export default class SignupScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <View>
            <Text style={styles.title}>Sign Up{'\n'}</Text>
            <TextInput
              placeholder="First Name"
              style={styles.input}
              underlineColorAndroid="transparent"
            />
            <Text>{'\n'}</Text>
            <TextInput
              placeholder="Last Name"
              style={styles.input}
              underlineColorAndroid="transparent"
            />
            <Text>{'\n'}</Text>
            <TextInput
              placeholder="Email"
              style={styles.input}
              underlineColorAndroid="transparent"
            />
            <Text>{'\n'}</Text>
            <View style={styles.formButton}>
              <Button
                onPress={ ()=> this.props.navigation.navigate('drawerStack', {title:'Home'}) }
                style={styles.buttonText}
                title="Submit"
                color="#9ECF62"
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#000",
    backgroundColor: "transparent",
    alignSelf: "center",
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    height: 40,
    width: 300,
    paddingHorizontal: 20,
    backgroundColor: '#FFF'
  },
  sign: {
    color: "#FFF",
    backgroundColor: "transparent",
    alignSelf: "center",
    fontWeight: 'bold',
    fontSize: 40,
  },
  formButton: {
    alignItems: "center",
    justifyContent: "center",
  }
});
