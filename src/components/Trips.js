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
 class Trips extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {locatie : 'eee'}
    }

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
                onChangeText={(text) => this.setState({locatie : text})}
                value={this.state.locatie}
                
                    />
            
            <TouchableHighlight onPress={() => this.addtrip()}>
              <Text>Add trip</Text>
                </TouchableHighlight>
              
                </View>
      <View>
    
        <Text style={styles.titleText} >A list of all the trips: </Text>
        { this.trips().map((trip) => {return <Text key={trip.id}> {trip.text}</Text>})}
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
