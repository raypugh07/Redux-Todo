import React from 'react';

import Footer from './footer'
import AddTodo from '../containers/AddToDo'
import VisibleTodoList from '../containers/visibiletodolist'
import '../css/index.css'


const App = () => (
 
  <div className='app'>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App