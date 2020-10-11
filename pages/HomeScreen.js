//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
//import all the basic component we have used

export default class HomeScreen extends React.Component {
  //Home Screen to show in Home Option
  render() {
    let pic = {
      uri: 'https://www.dailymirror.online/wp-content/uploads/2018/09/%E0%B8%A7%E0%B8%B4%E0%B8%AA%E0%B8%B2%E0%B8%AB%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%8A%E0%B8%99%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B9%8C%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%A5%E0%B8%99-%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%AB%E0%B8%A5%E0%B8%A1%E0%B9%82%E0%B8%AE%E0%B8%A1%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B8%A2%E0%B9%8C%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B1%E0%B8%9A-%E0%B8%88.jpg'
    };
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 10, fontSize: 40 }}>Forest Tour</Text>
        <Image source={pic} style={{width: 300, height: 220}}/>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('StaffView')}>
            <Text>View Staffs List</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Details')}>
            <Text>View Details Package</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('ProductsList')}>
            <Text>View Products List</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('CustomerList')}>
            <Text>View Customers List</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});