/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginPage from './src/pages/LoginPage';
import MainNavigator from './src/navigators/MainNavigator';

class App extends Component {
  render() {
       if (this.props.isLoggedIn) {
        return (   
            <MainNavigator />     
        );
      };
      return <LoginPage />; 
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps)(App);
