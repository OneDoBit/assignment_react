import React, { Component } from 'react';
import { Image, Button, TextInput, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default class LoginScreen extends Component {

  state = { user: '', pass: undefined } // initialize our default state values...try some different default values: '', 3, undefined, null

  render() {
    return (
      <View style={styles.container}>

        <Image style={{width: 300, height: 300}} source={require('../assets/N-Logo.png')}/>

        <TextInput 
        onChangeText={
          // update the user states value
          text => this.setState({user: text})
        }
        style={styles.input}
        placeholder="Enter Username">

        </TextInput>

        <TextInput 
        onChangeText={
          text => this.setState({pass: text})
        } 
        style={styles.input} 
        placeholder="Enter Password" 
        secureTextEntry={true} // hide text
        ></TextInput>

        <View style={styles.container2}>
          <Button 
            onPress={
              // Navigate to the App Navigation Stack Next
              () => this.props.navigation.navigate('App')
            }
            style={styles.h1} 
            color="black"
            title="Enter"
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    marginTop: -50,
    alignItems: 'center'
  },
  container2: {
    marginTop: 10,
    width: "40%",
    borderRadius: 50,
    overflow: "hidden"
  },
  h1: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: 'black',
    marginBottom: 20,
    padding: 10,
    width: '60%',
    borderRadius: 50,
    color: 'white'
  }
});