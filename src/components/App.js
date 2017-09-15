/**
 * Created by devSC on 2017/9/15.
 */

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

const App = () => {
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
}

export default App;