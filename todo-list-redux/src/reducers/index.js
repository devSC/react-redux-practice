/**
 * Created by devSC on 2017/9/15.
 */

import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux'

//todos 和 visibilityFilter 共同组成了全局的 state
const todoApp = combineReducers({
	todos,
	visibilityFilter
})

export default todoApp;