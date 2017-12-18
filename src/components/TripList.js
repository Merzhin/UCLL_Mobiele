import React, { Component } from 'react';
import { List, Map } from 'immutable';
import {
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  FlatList
} from 'react-native';

export default class TripList extends Component<{}> {
  render() {
    return (
        <FlatList
        data={dummyTrips2}
        renderItem={({ item }) => (
          <Text> {item.text} </Text>
        )}
/>
    );
  }
}

const dummyTrips2 = [ 
        { id: 0, isFinished: true,  text: 'trip description' },
        { id: 1, isFinished: false, text: 'caraiben' },
        { id: 2, isFinished: false, text: 'bahamas' },
        { id: 3, isFinished: false, text: 'alles behalve aulas' }];

const styles = StyleSheet.create({

  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#841584',
  },
  
});