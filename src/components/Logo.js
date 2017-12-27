import React, { Component } from 'react';
import {
  Image
} from 'react-native';


export default class Logo extends Component {
  render() {
    return (
      <Image 
        source={require('../../res/img/logo_tmp.png')}
        resizeMode='contain'
      />
    );
  }
}
