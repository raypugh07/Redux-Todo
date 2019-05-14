import React from 'react';

import Footer from './footer'
import AddTodo from '../containers/AddToDo'
import VisibleTodoList from '../containers/visibiletodolist'


const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App