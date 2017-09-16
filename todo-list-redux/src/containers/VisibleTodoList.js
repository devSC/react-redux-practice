/**
 * Created by devSC on 2017/9/15.
 */
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed)
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed)
	}
}

const mapStateToProps = (state) => ({
	//拿到当前的state中的todos list
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
	onTodoClick: (id) => {
		let action = toggleTodo(id);
		/* 通过dispatch将 toggleTodo(id) 返回的action 派发到reducer中执行
		 * 本示例中, 	todos, 和 visibilityFilter reducer 都会收到这个 action
		 * 而在对于的action中, 通过type来判断和处理相关对应的事件
		 */
		console.log("mapDispatchToProps - dispatch action: ", action);
		dispatch(action)
	}
})

//将 mapStateToProps, mapDispatchToProps 作为 TodoList 的第一 第二个参数传进去
const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default VisibleTodoList;