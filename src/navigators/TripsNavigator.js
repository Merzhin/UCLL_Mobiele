import { StackNavigator } from 'react-navigation';
import TripsOverviewPage from '../pages/TripsOverviewPage';
import TripDetails from '../pages/TripDetails';
import BillForm from '../components/BillForm';


const TripsNavigator = StackNavigator({
    Trips: {
        screen: TripsOverviewPage
    }, 
    TripDetails: {
        screen: TripDetails
    },
    NewExpense: {
        screen: BillForm
    }
});

export default TripsNavigator;
