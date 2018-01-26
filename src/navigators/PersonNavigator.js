import { StackNavigator } from 'react-navigation';
import PersonOverviewPage from '../pages/PersonOverviewPage';
import TripDetails from '../pages/TripDetails';
import BillForm from '../components/BillForm';
import AddPerson from '../pages/addPersonPage';

const PersonNavigator = StackNavigator({
    PersonOverviewPage: {
        screen: PersonOverviewPage,
        navigationOptions: {
            title: 'List of people',
        },
    }, 
    PersonDetails: {
        screen: TripDetails,
        navigationOptions: {
            title: 'Person details',
        },
    },
    AddPerson: {
        screen: AddPerson
    },
});

export default PersonNavigator;
