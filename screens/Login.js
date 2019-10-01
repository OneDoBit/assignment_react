import React, { Component } from 'react';
import { Image, Button, TextInput, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default class LoginScreen extends Component {

  state = { user: '', pass: undefined } 

  render() {
    return (
      <View style={styles.container}>

        <Image style={{width: 300, height: 300}} source={require('../assets/N-Logo.png')}/>

        <TextInput 
        onChangeText=
        {
          text => this.setState({user: text})
        }
        style={styles.input}
        placeholder="Enter Username">

        </TextInput>

        <TextInput 
        onChangeText=
        {
          text => this.setState({pass: text})
        } 
        style={styles.input} 
        placeholder="Enter Password" 
        secureTextEntry={true}
        ></TextInput>

        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.button}
            onPress=
            {
              () => this.props.navigation.navigate('App')
            }
            
          ><Text>Log In</Text></TouchableOpacity>
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
    alignItems: 'center',
    backgroundColor: '#111'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10
  },
  container2: {
    marginTop: 10,
    width: "40%",
    borderRadius: 50,
    overflow: "hidden"
  },
  input: {
    backgroundColor: '#FFF',
    marginBottom: 20,
    padding: 10,
    width: '60%',
    borderRadius: 50,
    color: 'black'
  }
});