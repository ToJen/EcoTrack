import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Camera from 'react-native-camera';


export default class ScanScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {barcode: ''}
  }

  onBarCodeRead = (e) => this.setState({barcode: e.data})

  render() {
    return (
      <View style={styles.container}>
        <Camera
          style={styles.preview}
          onBarCodeRead={this.onBarCodeRead}
          ref={cam => this.camera = cam}
          aspect={Camera.constants.Aspect.fill}
        >
          <Text style={styles.cameraData}>{this.state.barcode}</Text>
        </Camera>
        <Text>{'\n'}</Text>
        {/*<View style={styles.formButton}>
          <Icon.Button
            onPress={ () => console.log('Scanning...') }
            backgroundColor="#9ECF62"
            name="camera"
          >
            <Text style={{color: '#fff'}}>Scan</Text>
          </Icon.Button>
        </View>*/}
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
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cameraData: {
    backgroundColor: 'white'
  }
});
