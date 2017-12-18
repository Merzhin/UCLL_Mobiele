import React, { Component } from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';


export default class Logo extends Component<{}> {
  render() {
    return (
      <Image 
        source={require('../../res/img/logo_tmp.png')}
        style = {styles.logo}
      />
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});