/**
 * Created by devSC on 2017/9/15.
 */

import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => {
	<ul>
		{todos.map(todo =>
			<Todo
				key={todo.id}
				{...todo}
				onClick={() => onTodoClick(todo.id)} />
		)}
	</ul>
}

export default TodoList;