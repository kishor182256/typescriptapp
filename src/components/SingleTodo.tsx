import React from 'react'
import { Todo } from '../model'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md';
import './styles.css'

type Props={
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>

}

const SingleTodo = ({todo,todos,setTodos}:Props) => {
  return (
    <div className='todo_list'>     
       <div><span>{todo.todo}</span></div> 
       <div className='icon_list'>
       <span className='icons'><AiFillEdit/></span>
        <span className='icons'><AiFillDelete/></span>
        <span className='icons'><MdDone/></span>
       </div>
       
    </div>
  )
}

export default SingleTodo