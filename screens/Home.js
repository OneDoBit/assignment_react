import React from 'react';
import { Platform, NativeModules, Animated, StyleSheet, Text, View, ScrollView, Dimensions, Modal, TouchableWithoutFeedback } from 'react-native';
import ImageElement from "../components/ImageElements"
import { Ionicons } from '@expo/vector-icons';

const { UIManager } = NativeModules;
if (Platform.OS === 'android') 
{
    if (UIManager.setLayoutAnimationEnabledExperimental) 
    {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

class HomeScreen extends React.Component {

  first = new Animated.Value(1)

  state = 
  {
    modalVisible: false,
    modalImage: require('../assets/N-Logo.png'),
    images: //setting my images
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
    this.setState({ modalImage: this.state.images[imageKey]});//saying where to set the state
    this.setState({ modalVisible: visible})//activating modal
  }

  componentDidMount()
  {
    Animated.timing(this.first, {
      toValue: 0,
      duration: 500
  }).start(() => {
      Animated.spring(this.first, {
          toValue: 1,
          speed: 0,
          bounciness: 15
      }).start()
  });
}

    render() {

      let images = this.state.images.map((val, key) => {//TouchableWithoutFeedback is to clone a child
          return <TouchableWithoutFeedback key={key} onPress={() => {this.setModalVisible(true, key)}}>
            <Animated.View style={{...styles.imagewrap, transform: [{
                translateX: this.first.interpolate({
                    inputRange:[0,1],
                    outputRange:[20,0]
                })
              }]
            }}>
                  <ImageElement imgsource={val}></ImageElement>
                  
            </Animated.View>
          </TouchableWithoutFeedback>
          //posting an image
      });

      return (//code to create the actual modal when the picture is being pressed
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
            <Text style={styles.title}>My Work!</Text>
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