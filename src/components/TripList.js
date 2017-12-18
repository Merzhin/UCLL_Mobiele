import React, { Component } from 'react';
import { List, Map } from 'immutable';
import {
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  SectionList,
  FlatList,
  TouchableHighlight,
  Alert,
  View
} from 'react-native';

export default class TripList extends Component<{}> {
  render() {
    return (
      <View>
        <Text style={styles.titleText} >A list of all the trips: </Text>
        <FlatList
          data={dummyTrips2}
          renderItem={({ item }) => (
              <Text> {item.text} </Text>
          )}
        />
      </View>
    );
  }
}

const dummyTrips2 = [ 
        { id: 0, isFinished: true,  text: 'Bahamas' },
        { id: 1, isFinished: false, text: 'Caraiben' },
        { id: 2, isFinished: false, text: 'Jamaica' },
        { id: 3, isFinished: false, text: 'Alles behalve aulas' }];

const styles = StyleSheet.create({

  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#841584',
  },
  titleText: {
    fontSize: 20, 
    fontWeight: 'bold',
  }
  
});
