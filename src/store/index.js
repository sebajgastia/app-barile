import { combineReducers, createStore} from 'redux'

import CategoryReducer from './reducers/Category.reducer'
import HeladosReducer from './reducers/Helados.reducer'

const RootReducer = combineReducers({
    categories: CategoryReducer,
    Helados: HeladosReducer,
}); 

export default createStore (RootReducer);