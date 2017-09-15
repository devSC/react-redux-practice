/**
 * Created by devSC on 2017/9/15.
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';


const todo = (state, action) => {
	switch (action.type) {
		//如果是 ADD_TODO
		case ADD_TODO:
			return {
				id: action.id,
				text: action.text,
				completed: false
			};

		case COMPLETE_TODO:
			if (state.id !== action.id) {
				return state;
			}
			return Object.assign({}, state, {
				completed: !state.completed
			});

		default:
			return state;
	}
}

//列表
const todos = (state = [], action) => {
	switch (action.type) {
		//如果是 ADD_TODO
		case ADD_TODO:
			return [
				...state,
				todo(undefined, action)
			];

		case COMPLETE_TODO:
			return state.map(t => todo(t, action));

		default:
			return state;
	}
}

///导出
export default todos;