import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteTodo} from '../Actions/actions'

const Todo = (props) => {
  const { onClick, completed, text}=props
  const deleteTodo=e=>{
    e.preventDefault()
    props.deleteTodo()
  }
  return(
<div><li
  onClick={onClick}
  style={{
    textDecoration: completed ? 'line-through' : 'none'
  }}
>
  {text}

  <button onClick={deleteTodo}>Delete</button>
  
</li>


</div>
)}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

const mapStateToProps=state=>({

  
})
export default connect(mapStateToProps,{deleteTodo})(Todo)