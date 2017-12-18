import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Button
} from 'react-native';
import { login } from '../redux/auth/actions';

class Login extends Component<{}> {
  constructor (props) {
    super(props);
    this.state = {
        route: 'Login',
        username: ''
    };
}

userLogin (e) {
    this.props.onLogin(this.state.username);
    e.preventDefault();
}

toggleRoute (e) {
    let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
    this.setState({ route: alt });
    e.preventDefault();
}
  render() {
    let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
    return (
        <KeyboardAvoidingView>
          <Text> Please log in by typing your name in the form below. </Text>
          <TextInput 
          placeholder='Username'
          autoCapitalize='none'
          autoCorrect={false} 
          autoFocus={false} 
          keyboardType='email-address'
          value={this.state.username} 
          onChangeText={(text) => this.setState({ username: text })} />
          <Button 
            accessibilityLabel="To log in press this button"
            onPress={(e) => this.userLogin(e)} title={this.state.route}
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

const mapStateToProps = (state, ownProps) => {
  return {
      isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      onLogin: (username) => { dispatch(login(username)); },
      onSignUp: (username) => { dispatch(signup(username)); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);