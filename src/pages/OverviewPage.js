import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button, Platform, FlatList } from 'react-native';

import {STATUS_BAR_HEIGHT} from '../constants'
import { logout } from '../redux/actions/auth';
import Logo from '../components/Logo';
import Currencies from '../components/Currencies';
import Trips from '../components/Trips';
import BillList from '../components/BillList';
import BillTotals from '../components/BillTotals';

import TripList from "../components/TripList";
import Currency  from "../components/Currency";
class OverviewPage extends Component {
    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <Logo />
                    <Text style={{ fontSize: 24 }}>
                        Welkom op de Karavaan VZW app!
                    </Text>
                    <Text>
                        Currencytest : 
                    </Text>
                    <Currency base={'USD'} amount={'2'} /> 
                </ScrollView>
            </View>
        );
    }
}

const getUsers = (auth) => {
    return auth;
};

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username,
        users: state.trips,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); },
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
