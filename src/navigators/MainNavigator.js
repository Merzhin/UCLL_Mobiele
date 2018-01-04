import { TabNavigator } from 'react-navigation';
import MainPage from '../pages/MainPage';
import TripsPage from '../pages/TripsPage'; 
import OverviewPage from '../pages/OverviewPage';

const MainNavigator = TabNavigator({
        Overview: {
            screen: OverviewPage
         },
        Trips: {
            screen: TripsPage
        }, 
});

export default MainNavigator;
