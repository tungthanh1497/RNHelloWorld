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
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
      </View>
    );
  }
}
