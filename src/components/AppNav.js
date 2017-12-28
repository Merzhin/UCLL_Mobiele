import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import {STATUS_BAR_HEIGHT} from '../constants'

import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import TripPage from '../pages/TripPage'; 
import AddBill from '../components/AddBill'; 
import TripDetails from '../components/TripDetails'; 

export const TripStack = StackNavigator({
        Main: {
            screen: MainPage,
            navigationOptions: {
                title: 'Main'
            }
         },
        Trip: {
            screen: TripPage,
            navigationOptions: {
                title: 'trip'  //({ state }) => `${state.params.text}`
            }
        }, 
});

export const Tabs = TabNavigator ({
    Trip: {
        screen: TripDetails
    },
    AddBill: {
        screen: AddBill
    }
});