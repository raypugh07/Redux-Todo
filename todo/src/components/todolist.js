import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'
//import { deleteTodo } from '../Actions/actions';
//import { toggleTodo } from '../Actions/actions';

const TodoList = ({ todos, toggleTodo}) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => toggleTodo(index)}  />
    ))}
  </ul>
)


/*class TodoList extends Component{
  renderTodos=()=>this.props.todos.map((todo,index)=>
  <Todo key={index} {...todo} onClick={() => toggleTodo(index)} delete={this.props.delete} />)


  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};*/


TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
     
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList


/*const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList*/