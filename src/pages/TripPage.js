import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button } from 'react-native';

import { logout } from '../redux/actions/auth';
import Logo from '../components/Logo';
import Currencies from '../components/Currencies';
import Trips from '../components/Trips';
import BillList from '../components/BillList';
import BillTotals from '../components/BillTotals';

import TripList from "../components/TripList";
class TripPage extends Component {

    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }
     
    render() {
        //const  text = this.props.navigation.state.param.tripData.text;
        return (
            <ScrollView style={{ padding: 20 }}>
                <Text>{text}</Text>
            
            </ScrollView>
        );
    }
}

 
export default connect(null)(TripPage);
