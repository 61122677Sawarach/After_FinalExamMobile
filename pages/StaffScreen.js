import React from 'react';
import { StyleSheet,View,Text,FlatList,Image} from 'react-native';

export default class ViewStaff extends React.Component {

  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://172.16.156.137/FinalExam/StaffView.php'); 
    const testTable = await response.json();
    this.setState({data: testTable});
  }
  componentWillMount(){
    this.fetchData();
}

  render() {
    let pic = {
      uri: 'https://static.posttoday.com/media/content/2019/09/05/1F4A465E09344344A3CA7241645E4FB4.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={{ marginTop: 10, fontSize: 30 }}>Staff List</Text>
      <FlatList
        data={this.state.data}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>

        <View style={{backgroundColor:'#666666',padding:15,margin:10,borderRadius:10}}>
          <Text style={{color:'#fff'}}>ชื่อ: {item.SName}</Text>
          <Text style={{color:'#fff'}}>เบอร์โทร: {item.STelephone}</Text>
          <Text style={{color:'#fff'}}>รูป:</Text>
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