import {combineReducers} from 'redux'

import home from './home_reducer'
import movie from './movie_reducer'

export const rootReducer = combineReducers({
    home, movie
})