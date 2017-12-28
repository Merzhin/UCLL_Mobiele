import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import {STATUS_BAR_HEIGHT} from '../constants'

import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import TripPage from '../pages/TripPage'; 
import BillForm from '../components/BillForm'


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
        NewExpense: {
            screen: BillForm,
        }
});
