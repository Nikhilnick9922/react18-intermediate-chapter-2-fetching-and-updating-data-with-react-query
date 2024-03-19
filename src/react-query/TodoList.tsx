import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {

  // analyze the signature
  const fetchTodos =()=>  axios
  .get<Todo[]>('https://jsonplaceholder.typicode.com/todos').then(res=>res.data)     // we only want response data not the whole object


 const {data : todos} = useQuery({ // key is used for caching access
    queryKey : ['todos' ],
    queryFn :  fetchTodos

  })
// we can also use fetch api 


  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [error, setError] = useState('');

  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => setTodos(res.data))
  //     .catch((error) => setError(error));
  // }, []);

  // if (error) return <p>{error}</p>;


  
  return (
    <ul className="list-group">
      {todos?.map((todo) => (   // todos undefined erro because called to backend might be fail , so use optional chaining
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};  // with this we get auto Retries 

export default TodoList;


 
// we can also impliment the logic outside the query , in function fetchTodos 

//  in type script we have to be more specific than `any` type so we used `Todo[]`


// query has bunch of properties like data , error , isLoading and so on