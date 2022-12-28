//import  {CART} from '../../data/Cart'
import { ADD_ITEM, CONFIRM_CART, REMOVE_ITEM } from '../actions/Cart.action';


const initialState = {
    items: [], 
    total: 0,

}; 


const Sumatotal = (list) => {
    list.map ((item)=> item.quantity * item.price).reduce ((a,b) => a + b, 0);
}


const Cartreducer = (state = initialState, action ) => {
    switch (action.type) {
        case REMOVE_ITEM:
        const limpiarCarrito = [...state.items].filter(
            (item) => item.id !== action.itemID
        );
            return{...state, items: limpiarCarrito, total: Sumatotal(limpiarCarrito)}

        case ADD_ITEM:
            const Indexitem = state.items.findIndex(
                (item) => item.id === action.item.id  );

                if (Indexitem === -1) {
                    const item = {...action.item, quantity: 1}
                    const updateCart = [...state.items, item]
                    return {...state, items: updateCart, total: Sumatotal(updateCart)}
                }

            const items = [...state.items].map ((item) =>{
                if (item.id === action.item.id) item.quantity++;
                
                return item;
            });

                return{...state, items, total: Sumatotal(items)};
        
        case CONFIRM_CART:
            
            return{...state, items: [], total: 0 };
    
        default:
            return state; 
    }
}; 

export default Cartreducer