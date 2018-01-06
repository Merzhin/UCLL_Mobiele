import React, { Component } from 'react';
import { ScrollView, Text, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { addTrip } from '../redux/actions/trips';

export class AddTripPage extends Component {
    addtrip() {
        this.props.onAddTrip(this.state.locatie);
    }
    render() {
        return (
            <ScrollView>
                <TextInput 
                  placeholder='Enter Location'
                  onChangeText={(text) => this.setState({location: text })}
                  value={this.state.locatie}
                />
                <TouchableHighlight onPress={() => this.addtrip()}>
                  <Text>Add trip</Text>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      trips: state.trips.trips
    };
};

const mapDispatchToProps = (dispatch) => { 
    return {
          onAddTrip: (location) => { dispatch(addTrip(location)); }
    };
};
    
    
export default connect(mapStateToProps, mapDispatchToProps)(AddTripPage);
