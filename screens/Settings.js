import React from 'react';

import {StyleSheet, ActivityIndicator, Text, View, Dimensions, Button} from 'react-native';
class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);//calling parent constructor
    this.state = 
    { 
      dataSource: null,//inital data status
      refreshing: true,//setting refreshing being able
    };
  }

  componentDidMount ()//looks if component was mounted when page renders
  {
    return fetch('https://official-joke-api.appspot.com/jokes/programming/random')//api address
    .then((response) => response.json() )//looking for json
    .then((responseJson) => {//browsing through json
      this.setState({
        isLoading: false,
        dataSource: responseJson,//where to search
        refreshing: false,
      })
    })

    .catch((error) => {//looking for errors
      console.log(error)
    });

  };
  onRefresh() {//function to reload a page and get a new "Joke"
    this.setState({ dataSource: [] });
    this.componentDidMount();
  }

  render() {
    if (this.state.refreshing) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />  
        </View>
      );//making a little circle to let user now that data is being loaded
    }

    let jokes = this.state.dataSource.map((val, key) => {//setting the output
      return <View key={key} style={styles.item} >
        <Text style={styles.text1}>Jokes that you might here from me sometimes</Text>
        <Text style={styles.text} >{val.setup}</Text>
        <Text style={styles.text}>{val.punchline}</Text>
        <Button title="Get a new joke" onPress={() => this.onRefresh()}/>
      </View>
    });

    return (
      <View style={styles.MainContainer}>
        {jokes}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginTop: -100,
    backgroundColor: "#111",
  },
  scroll:
  {
    height: 200,
    flex: 1,
    backgroundColor: '#111',
  },
  item:
  {
    marginTop: Dimensions.get('window').height/3,
    backgroundColor: '#111',
  },
  text:
  {
    fontSize: 25,
    color: "#FFF",
    margin: 30,
  },
  text1:
  {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFF",
    margin: 30,
    marginTop: -100,
  }
});

export default SettingsScreen;