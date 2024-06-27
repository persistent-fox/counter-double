import { combineReducers, createStore } from 'redux';
import { counterReducer } from './reducers/counterReducer';

const rootReducer = combineReducers({
	counter: counterReducer,
});

export type TRootReducer = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
