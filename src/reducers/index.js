/**
 * Created by devSC on 2017/9/15.
 */

import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux'

const todoApp = combineReducers({
	todos,
	visibilityFilter
})

export default todoApp;