import React, { Component } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Button
} from 'react-native';

export default class Login extends Component<{}> {
  render() {
    return (
        <KeyboardAvoidingView>
          <Text> Please log in by typing your name in the form below. </Text>
          <TextInput 
            placeholder='Username'
            autoCapitalize='none'
            autoCorrect={false} 
            autoFocus={true} 
            keyboardType='email-address'
            accessibilityLabel="To log in enter your username here."
          />
          
          <Button 
            title="Log in"
            StyleSheet ='styles'
            accessibilityLabel="To log in press this button"
          />
        </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({

  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#841584',
  },
  
});