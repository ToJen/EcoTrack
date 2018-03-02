import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


export default class ScanScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.formButton}>
          <Icon.Button
            onPress={ () => console.log('Scanning...') }
            backgroundColor="#9ECF62"
            name="camera"
          >
            <Text style={{color: '#fff'}}>Scan</Text>
          </Icon.Button>
        </View>
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
  formButton: {
    alignItems: "center",
    justifyContent: "center"
  }
});
