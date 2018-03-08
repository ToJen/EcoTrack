import React, { Component } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


export default class HomeScreen extends Component {
	render() {
		return(
      <View style={styles.container}>
        <Text>Home{'\n'}</Text>
        <Button
        	title="Scan Items"
        	color="#9ECF62"
        	onPress={ () => this.props.navigation.navigate('Scan', {title:'Scan items'}) }
        />
      </View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});