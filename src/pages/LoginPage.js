import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { login } from '../redux/actions/auth';
import Logo from '../components/Logo';
import LoginForm from '../components/Login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'Login',
            username: ''
        };
    }
 
    userLogin(e) {
        this.props.onLogin(this.state.username);
        e.preventDefault();
    }
 
    toggleRoute(e) {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        this.setState({ route: alt });
        e.preventDefault();
    }
 
    render() {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        return (
            <View style={styles.container}>
                <Logo style={styles.logo}/>
                <Text style={styles.welcome}>
                    Welkom op de app van Karavaan VZW!
                </Text>
                <Text style={styles.welcome}>
                Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <LoginForm />
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: 20,
    },
    welcome: {
      fontSize: 20,
      margin: 10,      
    },
    instructions: {
      textAlign: 'center',
      marginBottom: 5,
    },

  });
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
};
 
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username) => { dispatch(login(username)); },
        onSignUp: (username) => { dispatch(signup(username)); }
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);
