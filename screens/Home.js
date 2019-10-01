import React from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
// import Data from '.app.json'
// import { Ionicons } from '@expo/vector-icons';

class HomeScreen extends React.Component {
  // constructor()
  // {
  //   super();
  //   this.items = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // }
    render() {
      return (

      //   <View style = { styles.container }>
      //   <ScrollView>
      //   {
      //     this.items.map(( item, key ) =>
      //     (
      //       <View key = { key } style = { styles.item }>
      //           <Text style = { styles.text }>{ item }</Text>
      //           <View style = { styles.separator }/>
      //       </View>
      //     ))
      //   }
      //   </ScrollView>
      // </View>  

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home Page!</Text>
        </View>
      );
    }
}

// const styles = StyleSheet.create(
//   {
//     container:
//     {
//       flex: 1,
//       paddingTop: (Platform.OS === 'ios') ? 20 : 0
//     },
    
//     separator:
//     {
//       height: 2,
//       backgroundColor: 'rgba(0,0,0,0.5)',
//       width: '100%'
//     },
   
//     text:
//     {
//       fontSize: 18,
//       color: 'black',
//       padding: 15
//     }
//   });

export default HomeScreen;