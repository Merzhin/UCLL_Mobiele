import currencies from './allCurrencies';

export default function (state=null, action) 
{
    console.log(action.payload);
    switch(action.type) 
    {
        case 'SELECT_CURRENCY' : 
            console.log("Select currency");
            var out = 'stuff';
            Object.entries(currencies).map(( item ) => 
            {
                if (item[1].base === action.payload.base) 
                { 
                    console.log("Item: ") ; 
                    console.log(item[1]); 
                    out = item[1]; 
                }
            }
            );
            return out;
            break;
            
        default :
            return state; 
    };
};
