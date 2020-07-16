import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Greeting extends Component {
  render() {
    const strContent = `Hello ${this.props.name}. How are you?`;
    return <Text>{strContent}</Text>;
  }
}

export default class MultipleGreeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>
          {'\n'}
          {'\n'}
        </Text>
        <Greeting name="aloalo" />
        <Greeting name="tungtt" />
        <Greeting name="vedz" />
      </View>
    );
  }
}
