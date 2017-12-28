import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button, Platform } from 'react-native';

import {STATUS_BAR_HEIGHT} from '../constants'
import { logout } from '../redux/actions/auth';
import Logo from '../components/Logo';
import Currencies from '../components/Currencies';
import Trips from '../components/Trips';
import BillList from '../components/BillList';
import BillTotals from '../components/BillTotals';

import TripList from "../components/TripList";
class MainPage extends Component {

    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }
     
    render() {
        return (
            <ScrollView style={{ padding: 20 }}>
             <Logo />
                <Text style={{ fontSize: 27 }}>
                    {`Welcome ${this.props.username}`}
                </Text>
                <View style={{margin: 20}}/>
                <Currencies />
                <Trips navigation={this.props.navigation}/>
               
                <BillList />
                <BillTotals />
                
                <Button onPress={(e) => this.userLogout(e)} title="Logout"/>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username,
        
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); },
       
        
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
