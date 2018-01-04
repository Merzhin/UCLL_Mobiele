import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
class TripList extends Component {
  

    onTripPress = ( trip ) => {
    this.props.navigation.navigate('Trip', { trip });
  }; 
  trips() {
    return Object.keys(this.props.trips).map(key => this.props.trips[key])
  };
  render() {
    return (
      <View>
        <Text style={styles.titleText} >A list of all the trips: </Text>
        <ScrollView>
        { this.trips().map((trip) => {return <TouchableHighlight onPress={() => this.onTripPress(trip)}><Text key={trip.id}> {trip.text}</Text></TouchableHighlight>})}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips.trips
  };
};

export default connect(mapStateToProps)(TripList);

const dummyTrips2 = [ 
        { id: 0, isFinished: true, text: 'Bahamas' },
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
