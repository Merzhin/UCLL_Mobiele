import { StackNavigator } from 'react-navigation';
import TransfersPage from '../pages/MoneyTransferPage';
import AddTransfer from '../pages/addTransferPage';

const TransfersNavigator = StackNavigator({
    Trips: {
        screen: TransfersPage,
        navigationOptions: {
            title: 'Overview of transfers',
        }
    }, 
    AddTransfer: {
        screen: AddTransfer
    }
});

export default TransfersNavigator;
