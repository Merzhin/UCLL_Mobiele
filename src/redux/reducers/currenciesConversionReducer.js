export const currenciesConversionReducer = (state='', action) => 
{
    console.log(action.payload);
    switch(action.type) 
    {
        case 'GET_CURRENCY_DATA_FOR' : 
            switch(action.payload.base) 
            {
                case 'USD': 
                    return USD;
                case 'EUR': 
                    return EUR;                
                case 'JPY' :
                    return JPY;
                case 'GBP' : 
                    return GBP;
                default :
                    return state;
            }
        break;
        default : return state; 
    };
}


export const USD = () =>
{
    return {

        "base":"USD",
        "date":"2018-01-05",
        "rates":{
            "USD": 1,
            "GBP":0.73792,
            "JPY":113.28,
            "EUR":0.83022
        }
    }
}
export const EUR = () =>
{
    return {
        
        "base":"EUR",
        "date":"2018-01-05",
        "rates":{
            "EUR": 1,
            "GBP":0.88883,
            "JPY":136.45,
            "USD":1.2045
        }
    }
}
export const JPY = () =>
{
    return {

        "base":"JPY",
        "date":"2018-01-05",
        "rates":{
            "JPY":1,
            "GBP":0.006514,
            "USD":0.0088274,
            "EUR":0.0073287
        }
    }
}

export const GBP = () =>
{
    return {

        "base":"GBP",
        "date":"2018-01-05",
        "rates":{
            "GBP":1,
            "JPY":153.52,
            "USD":1.3552,
            "EUR":1.1251
        }
    }
}