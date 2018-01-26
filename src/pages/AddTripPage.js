import React, { Component } from 'react';
import { ScrollView, Text, TextInput, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { addTrip } from '../redux/actions/trips';

export class AddTripPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            locationError: "Location can't be empty"
        }
    }
    
    
    validate ()
    {
        let isValid = true; 
        
        if (this.state.location.length < 1 ) 
        {
            isValid = false;
            this.setState({locationError: "Location can't be empty"});
        }
        return isValid;
    }

    addtrip() 
    {
        const isValid = this.validate();
        if (isValid)
        {
            this.props.onAddTrip(this.state.location);
            this.props.navigation.dispatch(NavigationActions.back());
        } else {
            console.log(this.state.locationError);
            alert(this.state.locationError);
        }
    }
    render() {
        return (
            <ScrollView>
                <TextInput
                    placeholder='Enter Location'
                    onChangeText={(text) => this.setState({ location: text })}
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
