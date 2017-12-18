/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginPage from './src/pages/LoginPage';
import MainPage from './src/pages/MainPage';

class App extends Component {
  render() {
      if (this.props.isLoggedIn) {
          return <MainPage />;
      } else {
          return <LoginPage />;
      }
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
      isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(App);