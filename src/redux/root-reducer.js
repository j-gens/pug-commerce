import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import homeMenuReducer from './home-menu/home-menu.reducer';
import shopReducer from './shop/shop.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  homeMenu: homeMenuReducer,
  shop: shopReducer,
});


export default persistReducer(persistConfig, rootReducer);
