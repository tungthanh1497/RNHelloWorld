import React, {Component} from 'react';
import {Text, View, Alert} from 'react-native';
import Button from 'react-native-button';

export default class TouchGestureAndButton extends Component {
  render() {
    let messageContent = 'ahihi';
    const _onButtonPressed = () => {
      Alert.alert('lewlew');
    };
    return (
      <View
        style={{
          backgroundColor: 'silver',
          margin: 50,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/*         
        <View
          style={{
            backgroundColor: 'yellow',
            padding: 20,
            borderRadius: 16,
            opacity: 0.5,
            shadowOpacity: 0.5,
            shadowRadius: 16,
          }}>
          <Button
            title="sup"
            onPress={_onButtonPressed}
            backgroundColor="blue"
            color="red"
          />
        </View>
         */}

        <Button
          style={{
            color: 'red',
            backgroundColor: 'yellow',
          }}
          onPress={_onButtonPressed}>
          alo alo
        </Button>
        <Text>{messageContent}</Text>
      </View>
    );
  }
}
