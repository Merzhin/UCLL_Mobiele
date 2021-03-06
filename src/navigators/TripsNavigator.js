import { StackNavigator } from 'react-navigation';
import TripsOverviewPage from '../pages/TripsOverviewPage';
import TripDetails from '../pages/TripDetails';
import BillForm from '../components/BillForm';
import AddTrip from '../pages/AddTripPage';
import AddPayment from '../pages/addTransferPage'

const TripsNavigator = StackNavigator({
    Trips: {
        screen: TripsOverviewPage,
        navigationOptions: {
            title: 'Trips',
        },
    }, 
    TripDetails: {
        screen: TripDetails,
        navigationOptions: {
            title: 'Trip details',
        },
    },
    AddTrip: {
        screen: AddTrip
    },
    NewExpense: {
        screen: BillForm
    },
    AddPayment: {
        screen: AddPayment
    }
});

export default TripsNavigator;
