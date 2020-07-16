import React, {Component} from 'react';
import {View} from 'react-native';

export default class FixedDimension extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'green', marginTop: 50}}>
        <View style={{width: 200, height: 50, backgroundColor: 'yellow'}} />
        <View style={{width: 200, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 200, height: 50, backgroundColor: 'yellow'}} />
      </View>
    );
  }
}
