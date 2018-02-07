import React from 'react';
import { StyleSheet, Text, View TestInput, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Welcome to EcoTrack!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
