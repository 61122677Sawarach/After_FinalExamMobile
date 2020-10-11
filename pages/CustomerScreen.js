import React from 'react';
import { StyleSheet,View,Text,FlatList } from 'react-native';

export default class ViewCutomer extends React.Component {

  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://172.16.156.137/FinalExam/CustomerList.php'); 
    const testTable = await response.json();
    this.setState({data: testTable});
  }
  componentWillMount(){
    this.fetchData();
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginTop: 10, fontSize: 30 }}>Customer List</Text> 
      <FlatList
        data={this.state.data}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>

        <View style={{backgroundColor:'#009999',padding:10,margin:10,borderRadius:10}}>
          <Text style={{color:'#fff'}}>ชื่อ: {item.CName}</Text>
          <Text style={{color:'#fff'}}>เบอร์โทร: {item.CTelephone}</Text>
          <Text style={{color:'#fff'}}>เพศ: {item.CSex}</Text>
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