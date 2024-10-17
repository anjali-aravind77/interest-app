import React from 'react'
import useFetch from './useFetch'

const Todo = () => {

const allTodods = useFetch("https://jsonplaceholder.typicode.com/todos")


  return (
    <div>
        <h1 className="text-center my-10">all todo </h1> {
            allTodods?.map(item => (
                <h4 key={item?.id}>{item.title}</h4>
            ))
        }
    </div>
  )
}

export default Todo