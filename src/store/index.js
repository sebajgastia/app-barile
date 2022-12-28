import { applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import AuthReducer from './reducers/auth.reducer';
import cartreducer from './reducers/cart.reducer';
import CategoryReducer from './reducers/Category.reducer'
import HeladosReducer from './reducers/Helados.reducer'
import OrderReducer from './reducers/order.reducer';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    Helados: HeladosReducer,
    cart: cartreducer,
    orders: OrderReducer,
    auth: AuthReducer,
    
}); 

export default createStore (RootReducer, applyMiddleware(thunk));