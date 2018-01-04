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
import { connect } from 'react-redux';
import { addTrip } from '../redux/actions/trips';

 class Trips extends Component {
    constructor(props){
        super(props);
        this.state = {locatie : ''}
    }

    onTripPress = ( trip ) => {
      this.props.navigation.navigate('Trip', { trip });
    } ; 

  trips() {
      return Object.keys(this.props.trips).map(key => this.props.trips[key])
    }
    addtrip(){
        this.props.onAddTrip(this.state.locatie);
    }
  
  render() {
      console.log(this.props);
    
      
    return (
        <View>
            <View>
                <TextInput 
                  placeholder='Enter Location'
                  onChangeText={(text) => this.setState({locatie : text})}
                  value={this.state.locatie}
                />
            
            <TouchableHighlight onPress={() => this.addtrip()}>
              <Text>Add trip</Text>
            </TouchableHighlight>
              
            </View>
      <View>
    
        <Text style={styles.titleText} >A list of all the trips: </Text>
        { this.trips().map((trip) => {return <TouchableHighlight onPress={() => this.onTripPress(trip)}><Text key={trip.id}> {trip.text}</Text></TouchableHighlight>})}
      </View>
      </View>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    trips: state.trips.trips
  };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddTrip: (locatie) => { dispatch(addTrip(locatie)); }
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Trips);

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
