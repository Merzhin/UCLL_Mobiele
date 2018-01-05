import { StackNavigator } from 'react-navigation';
import OverviewPage from '../pages/TripsOverviewPage';
import TripPage from '../pages/BlankTestPage'; // This is a test,... should be trippage but that thing crashes

const TripsNavigator = StackNavigator({
        Overview: {
            screen: OverviewPage,
            navigationOptions: {
                headerTitle: 'Overview of all trips',
            },
         },
        Trip: {
            screen: TripPage
        },
});

export default TripsNavigator;
