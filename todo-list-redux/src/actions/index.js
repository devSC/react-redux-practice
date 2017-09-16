/**
 * Created by devSC on 2017/9/15.
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

///返回各种 action 然后在 reducers中执行对应的事件

let nextTodId = 0;

export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextTodId ++,
		text
	}
}

export const setVisibility = (filter) => {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}

export const toggleTodo = (id) => {
	return {
		type: COMPLETE_TODO,
		id
	}
}