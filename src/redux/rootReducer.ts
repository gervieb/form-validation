import { combineReducers } from 'redux'
import errorReducer from './reducers/errorReducer'
import validationReducer from './reducers/validationReducer';
import visibilityReducer from './reducers/visibilityReducer';

const rootReducer = combineReducers({
    errors: errorReducer,
    isValidated: validationReducer,
    isVisible: visibilityReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;