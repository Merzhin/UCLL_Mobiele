import { TabNavigator, StackNavigator } from 'react-navigation';
import MainPage from '../pages/MainPage';
import TripsPage from '../pages/TripsPage'; 
import TripDetails from '../pages/TripDetails'
import OverviewPage from '../pages/OverviewPage';
import BillsPage from '../pages/BillsPage';
import BillForm from '../components/BillForm';

export const TripStack = StackNavigator({
    Trips: {
        screen: TripsPage
    }, 
    TripDetails: {
        screen: TripDetails
    },
    NewExpense: {
        screen: BillForm
    }
});


export const MainNavigator = TabNavigator({
        Overview: {
            screen: OverviewPage
         },
        Trips: {
            screen: TripStack
        }, 
        Bills: {
            screen: BillsPage
        },
});
