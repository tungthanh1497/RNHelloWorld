import React, {Component} from 'react';
import {View} from 'react-native';

export default class JustifyContentExample extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'blue',
          marginTop: 50,
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
        <View style={{height: 50, backgroundColor: 'yellow'}} />
        <View style={{height: 50, backgroundColor: 'red'}} />
        <View style={{height: 50, backgroundColor: 'yellow'}} />
      </View>
    );
  }
}
