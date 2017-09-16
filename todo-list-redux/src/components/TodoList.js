/**
 * Created by devSC on 2017/9/15.
 */
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
	<ul>
		{todos.map(todo =>
			<Todo
				key={todo.id} //这里的todo.id = action.id
				{...todo}
				onClick={() => onTodoClick(todo.id)} /> //通过todo id 来在全局的state中 todos 列表中的找到对于的todo项目, 并对其做修改.
		)}
	</ul>
)

export default TodoList;