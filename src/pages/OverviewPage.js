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
import { Currency } from "../components/Currency";
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
                    <Text style={{ fontSize: 27 }}>
                        {`Welcome ${this.props.username}`}
                    </Text>
                </ScrollView>
                <Button onPress={(e) => this.userLogout(e)} title="Logout" />
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username,
        
    };
};
 
const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); },
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
