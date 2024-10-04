// src/redux/store.ts
import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';

// RootReducer'ı birleştiriyoruz
const rootReducer = combineReducers({
  auth: authReducer,
});

// RootState tipini tanımlıyoruz
export type RootState = ReturnType<typeof rootReducer>;

// Store'u oluşturuyoruz
const store = createStore(rootReducer);

// AppDispatch tipini tanımlıyoruz
export type AppDispatch = typeof store.dispatch;

export default store; // Store'u dışa aktarıyoruz
