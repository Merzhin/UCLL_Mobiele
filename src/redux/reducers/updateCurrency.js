import currencies from './allCurrencies';

export default function (state={}, action) 
{
    console.log(action.payload);
    switch(action.type) 
    {
        case 'UPDATE_CURRENCY' : 
            console.log("Update currency");
            const newCurrencies = { ...currencies };
            Object.entries(newCurrencies).map(( item ) => 
            {
                if (item[1].base === action.payload.base) 
                { 
                    console.log("Item: "); 
                    console.log(item[1]); 
                    item[1].rates = action.payload.rates;
                    console.log(item[1]); 
                }
            });
            return {
                ...state,
                newCurrencies
            }
            break;
        case 'CONVERT_CURRENCY' : 
            console.log("Convert currency");
            console.log(action.payload);
            const conversionRate = 0;
            Object.entries(currencies).map((currencyObject) =>
            {
                if (currencyObject[1].base === action.payload.base) 
                {
                    conversionRate = currencyObject[1].rates[action.payload.target];
                }; 
            }

            );
            return conversionRate;
        default :
            return state; 
    };
};