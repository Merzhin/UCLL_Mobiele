import React, { Component } from 'react';
import {
  Image, StyleSheet, Text, Picker
} from 'react-native';
import { connect } from 'react-redux';

export class CurrencyPicker extends Component {
  render() {
    return (
        <Picker
        selectedValue={'EUR'}
        onValueChange={(value) => this.setState({ currency: value })}
        >
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="US Dollar" value="USD" />
      </Picker>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      currencies: state.currencies
    };
  };
  
export default connect(mapStateToProps)(CurrencyPicker);
