import React, {Component} from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import Button from 'react-native-button';

export default class VerticalScrollView extends Component {
  render() {
    const screenWdith = Dimensions.get('window').width;
    return (
      <ScrollView
        style={{marginTop: 50}}
        keyboardDismissMode="on-drag"
        maximumZoomScale={3}
        minimumZoomScale={0.2}
        contentContainerStyle={{padding: 50}}>
        <Image
          source={require('../images/download.jpeg')}
          style={{width: screenWdith, height: (screenWdith * 9) / 16}}
        />
        <TextInput style={{padding: 10, margin: 10, borderWidth: 1}} />
        <Image
          source={require('../images/download.jpeg')}
          style={{width: screenWdith, height: (screenWdith * 9) / 16}}
        />
        <TextInput style={{padding: 10, margin: 10, borderWidth: 1}} />
        <Image
          source={require('../images/download.jpeg')}
          style={{width: screenWdith, height: (screenWdith * 9) / 16}}
        />
        <TextInput style={{padding: 10, margin: 10, borderWidth: 1}} />
        <Image
          source={require('../images/download.jpeg')}
          style={{width: screenWdith, height: (screenWdith * 9) / 16}}
        />
        <TextInput style={{padding: 10, margin: 10, borderWidth: 1}} />
        <Image
          source={require('../images/download.jpeg')}
          style={{width: screenWdith, height: (screenWdith * 9) / 16}}
        />
        <TextInput style={{padding: 10, margin: 10, borderWidth: 1}} />
        <Image
          source={require('../images/download.jpeg')}
          style={{width: screenWdith, height: (screenWdith * 9) / 16}}
        />
        <TextInput style={{padding: 10, margin: 10, borderWidth: 1}} />
        <Image
          source={require('../images/download.jpeg')}
          style={{width: screenWdith, height: (screenWdith * 9) / 16}}
        />
        <TextInput style={{padding: 10, margin: 10, borderWidth: 1}} />
        <Image
          source={require('../images/download.jpeg')}
          style={{width: screenWdith, height: (screenWdith * 9) / 16}}
        />
        <TextInput style={{padding: 10, margin: 10, borderWidth: 1}} />
        <Image
          source={require('../images/download.jpeg')}
          style={{width: screenWdith, height: (screenWdith * 9) / 16}}
        />
        <TextInput style={{padding: 10, margin: 10, borderWidth: 1}} />
      </ScrollView>
    );
  }
}
