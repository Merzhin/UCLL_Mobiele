import { TabNavigator } from 'react-navigation';
import OverviewPage from '../pages/OverviewPage';
import BillsPage from '../pages/BillsPage';
import TripStack from './TripsNavigator';
import MoneyTransferNavigator from './TransfersNavigator';
import PeopleNav from './PersonNavigator'

const MainNavigator = TabNavigator({
        Overview: {
            screen: OverviewPage
         },
        Trips: {
            screen: TripStack
        }, 
        Bills: {
            // screen: BillsPage
            screen: PeopleNav
        },
        People: {
            screen: MoneyTransferNavigator
        }
});

export default MainNavigator;
