import React from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, Dimensions, Modal, TouchableWithoutFeedback } from 'react-native';
import ImageElement from "../components/ImageElements"
import { Ionicons } from '@expo/vector-icons';

class HomeScreen extends React.Component {

  state = 
  {
    modalVisible: false,
    modalImage: require('../assets/N-Logo.png'),
    images: 
    [
      require('../assets/SS10.jpg'),
      require('../assets/SS1.png'),
      require('../assets/SS3.png'),
      require('../assets/SS5.png'),
      require('../assets/SS12.png'),
      require('../assets/SS13.png'),
    ]
  }

  setModalVisible(visible, imageKey)
  {
    this.setState({ modalImage: this.state.images[imageKey]});
    this.setState({ modalVisible: visible})
  }

    render() {

      let images = this.state.images.map((val, key) => {
          return <TouchableWithoutFeedback key={key} onPress={() => {this.setModalVisible(true, key)}}>
            <View style={styles.imagewrap}>
                  <ImageElement imgsource={val}></ImageElement>
            </View>
          </TouchableWithoutFeedback>
      });

      return (
        <View style={styles.container}>
          <Modal style={styles.modal} animationType={'fade'} transparent={true} visible={this.state.modalVisible} onRequestClose={() => {}}>
            <View style={styles.modal}>
              <Ionicons style={styles.text} onPress={() => {this.setModalVisible(false)}} name="ios-close-circle-outline" size={50}/>
              <View style={styles.elem}>
                <ImageElement imgsource={this.state.modalImage}></ImageElement>
              </View>
            </View>
          </Modal>
          

          <ScrollView>
            <Text style={styles.title}>My Work</Text>
            {images}
          </ScrollView>

        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: 
    {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#111',
    },
    title:
    {
      textAlign: 'center',
      marginTop: 50,
      marginBottom: 20,
      fontSize: 50,
      fontWeight: '500',
      fontStyle: 'italic',
      color: "white",
    },
    imagewrap: 
    {
      margin: 20,
      marginLeft: 20,
      marginRight: 20,
      height: (Dimensions.get('window').height/3) - 12,
      borderRadius: 70 / 2,
      borderWidth: 3,
      borderColor: '#222',
      overflow: 'hidden',
      backgroundColor: '#fff',
    },
    modal:
    {
      flex: 1,
      paddingTop: 40,
      backgroundColor: 'rgba(0,0,0, 0.9)',
      
    },
    elem:
    {
      marginRight: 40,
      width: Dimensions.get('window').width,
      height: 400,
      marginTop: Dimensions.get('window').height/6,
    },
    text:
    {
      color: '#fff',
      paddingLeft: 40,
    }

});

export default HomeScreen;