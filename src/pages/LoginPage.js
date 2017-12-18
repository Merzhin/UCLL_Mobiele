import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { login } from '../redux/auth/actions';
import Logo from "../components/Logo";
 
class Login extends Component {
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
 
    render () {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        return (
            <ScrollView style={styles.container}>
                <Logo style={styles.logo}/>
                <Text style={styles.welcome}>
                    {this.state.route}
                </Text>
                <TextInput 
                    placeholder='Username'
                    autoCapitalize='none'
                    autoCorrect={false} 
                    autoFocus={true} 
                    keyboardType='email-address'
                    value={this.state.username} 
                    onChangeText={(text) => this.setState({ username: text })} />
                <View style={{margin: 7}}/>
                <Button onPress={(e) => this.userLogin(e)} title={this.state.route}/>
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#F5FCFF',
      padding: 20,
    },
    logo: {
        flex: 1,
        alignSelf: 'center',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
      },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
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