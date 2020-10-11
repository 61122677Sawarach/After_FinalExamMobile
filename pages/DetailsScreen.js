import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class DetailsScreen extends React.Component {
  render() {
    return (
	<WebView
        source={{uri: 'https://thailandtourismdirectory.go.th/th/info/attraction/detail/itemid/21344'}}
        style={{marginTop: 20}}
      />
    );
  }
}

