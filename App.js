/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation'
import store from './src/redux';
import { AppRegistry } from 'react-native';
import { TripStack } from './src/components/AppNav';
import LoginPage from './src/pages/LoginPage';


class App extends Component {
  render() {

      if (this.props.isLoggedIn) {
        return ( 
          <Provider store={store}> 
            <TripStack/>
          </Provider>
        )
        
      } 
      return <LoginPage />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps)(App);
