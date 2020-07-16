/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {'\n'}
          {'\n'}
          {'\n'}
        </Text>
        <Text style={styles.firstText}>Meomeo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: '#FFFF00',
    borderTopColor: 'blue',
    borderColor: '#ff0000',
    borderWidth: 2,
  },
  firstText: {
    margin: 50,
    color: 'green',
    fontSize: 50,
  },
});
