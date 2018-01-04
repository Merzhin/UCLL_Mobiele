import { TabNavigator } from 'react-navigation';
import MainPage from '../pages/MainPage';
import TripsPage from '../pages/TripsPage'; 
import OverviewPage from '../pages/OverviewPage';
import BillsPage from '../pages/BillsPage';

const MainNavigator = TabNavigator({
        Overview: {
            screen: OverviewPage
         },
        Trips: {
            screen: TripsPage
        }, 
        Bills: {
            screen: BillsPage
        },
});

export default MainNavigator;
