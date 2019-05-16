


export const ADD_TODO='ADD_TODO'
export const  TOGGLE_TODO='TOGGLE_TODO'
export const SET_VISIBILITY_FILTER='SET_VISIBILITY_FILTER'




export function deleteTodo(id){
    return{
        type:'DELETE_TODO',
        payload:id
    }
}


export const VisibilityFilters={
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETED:'SHOW_COMPLETED',
    SHOW_ACTIVE:'SHOW_ACTIVE'
}

export function addTodo(text){
    return{
        type:ADD_TODO,text
    }
}

export function toggleTodo(index){
    return{
        type:TOGGLE_TODO,index
    }
}

export function setVisibilityFilter(filter){
    return{
        type:SET_VISIBILITY_FILTER,filter
    }
}

/*const mapDispatchToProps=dispatch=>{
    return {
        delete:todoText=>dispatch({type:'DELETE_TODO',payload:todoText})
    }
}

export default mapDispatchToProps;*/