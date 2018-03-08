import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { BarCodeScanner, Permissions } from 'expo';


export default class ScanScreen extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      hasCameraPermission: null,
      barcodeType: '',
      barcodeData: null
    }
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted'
    });
  }

  handleBarCodeRead = ({ type, data }) => {
    alert(`Barcode with type ${type} and data ${data} has been scanned!`);
  }


  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeRead={this.handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
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
