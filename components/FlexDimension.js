import React, {Component} from 'react';
import {View} from 'react-native';

export default class FlexDimension extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'blue', marginTop: 50, flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'yellow'}} />
        <View style={{flex: 2, backgroundColor: 'red'}} />
        <View style={{flex: 3, backgroundColor: 'yellow'}} />
      </View>
    );
  }
}
