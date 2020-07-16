import React, {Component} from 'react';
import {View, TextInput, Text, Keyboard} from 'react-native';

export default class TextInputExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: 'email',
      passwordInput: 'password',
    };
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        this.setState(() => {
          return {
            emailInput: 'showing',
          };
        });
      },
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        this.setState(() => {
          return {
            emailInput: 'hiding',
          };
        });
      },
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    return (
      <View style={{marginTop: 50, flexDirection: 'column'}}>
        <TextInput
          style={{
            height: 50,
            backgroundColor: 'yellow',
            borderColor: 'blue',
            borderWidth: 2,
            borderRadius: 5,
            padding: 10,
          }}
          keyboardType="email-address"
          placeholder="Enter your email"
          placeholderTextColor="green"
          onChangeText={(text) => {
            if (text.length < 5 || text.length > 10) {
              this.setState(() => {
                return {
                  emailInput: 'fail' + text,
                };
              });
            } else {
              this.setState(() => {
                return {
                  emailInput: 'ok' + text,
                };
              });
            }
          }}
        />
        <Text>{this.state.emailInput}</Text>
        <TextInput
          style={{
            height: 50,
            backgroundColor: 'yellow',
            borderColor: 'blue',
            borderWidth: 2,
            borderRadius: 5,
            padding: 10,
          }}
          keyboardType="default"
          secureTextEntry={true}
          placeholder="Enter your password"
          placeholderTextColor="green"
          onChangeText={(text) => {
            if (text.length < 5 || text.length > 10) {
              this.setState(() => {
                return {
                  passwordInput: 'fail' + text,
                };
              });
            } else {
              this.setState(() => {
                return {
                  passwordInput: 'ok' + text,
                };
              });
            }
          }}
          autoFocus={true}
        />
        <Text>{this.state.passwordInput}</Text>
        <TextInput
          style={{
            width: 150,
            height: 300,
            backgroundColor: 'yellow',
            borderColor: 'blue',
            borderWidth: 2,
            borderRadius: 5,
            padding: 10,
          }}
          returnKeyType="done"
          keyboardType="default"
          secureTextEntry={true}
          placeholder="Enter your password"
          placeholderTextColor="green"
          onChangeText={(text) => {}}
          multiline={true}
          editable={true}
          autoFocus={true}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
    );
  }
}
