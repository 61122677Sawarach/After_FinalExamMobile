import React from 'react';
import { StyleSheet,View,Text,FlatList,Image } from 'react-native';

export default class ViewProducts extends React.Component {

  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://172.16.156.137/FinalExam/ProductsView.php'); 
    const testTable = await response.json();
    this.setState({data: testTable});
  }
  componentWillMount(){
    this.fetchData();
}

  render() {
    let pic = {
        uri: 'https://www.ovsla.com/wp-content/uploads/2015/06/hunting-garden.jpg'
      };
    return (
      <View style={styles.container}>
        <Text style={{ marginTop: 10, fontSize: 30 }}>Products List</Text> 
      <FlatList
        data={this.state.data}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>

        <View style={{backgroundColor:'#339966',padding:10,margin:10,borderRadius:10}}>
          <Text style={{color:'#fff'}}>ชื่อProducts: {item.PName}</Text>
          <Text style={{color:'#fff'}}>ราคา: {item.PPrice}</Text>
          <Image source={pic} style={{width: 100, height: 50}}/>
        </View>

        } 
      />
  </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});