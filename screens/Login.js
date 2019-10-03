import React, { Component } from 'react';
import {Easing, Animated, TextInput, StyleSheet, Text, NativeModules, Platform, View, TouchableOpacity } from 'react-native';

const { UIManager } = NativeModules;
if (Platform.OS === 'android') 
{
    if (UIManager.setLayoutAnimationEnabledExperimental) 
    {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export default class LoginScreen extends Component {

  first = new Animated.Value(0)

  state = { user: '', pass: undefined } 

  componentDidMount()
  {
    Animated.timing(this.first,{
      toValue: 1,
      duration: 1000,
      easing: Easing.bezier(0.645, 0.045, 0.355, 1)
    }).start();
  }
  render() {
    return (
      <View style={styles.container}>

        <Animated.Image style={{width: 300, height: 300, opacity:this.first}} source={require('../assets/N-Logo.png')}/>

        <TextInput //login creditentials
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
          <TouchableOpacity //a lot better to use this instead of button, since its more customizable
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