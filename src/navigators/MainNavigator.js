import { TabNavigator, StackNavigator } from 'react-navigation';
import MainPage from '../pages/MainPage';
import TripDetails from '../pages/TripDetails'
import OverviewPage from '../pages/OverviewPage';
import BillsPage from '../pages/BillsPage';
import TripStack from './TripsNavigator';

const MainNavigator = TabNavigator({
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

export default MainNavigator;