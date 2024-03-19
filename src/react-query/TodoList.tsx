import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => setTodos(res.data))
      .catch((error) => setError(error));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;


//  there are number of problems in this implimentation 


//  we are not canceling request if our component is unmounted , which we have done in gamehub
// if useEffect we should pass cleanup function for undoing 
//  in case of Http request we should cancel them

// 2nd problem is no seperation of concerns 
// querying logic is leaked into the component , we have to duplicate querying logic in another place if implimented
// no reuse here , no modularity is here .
// we should encapsulte them in hook like we did before


// 3d is not trying failed requests , showing error and move on


// 4th is no automatic refresh , 
// if there is chnage while user on the page, until user is not refreshing he does not see changes 



//  5th is no caching ,
// we can store frequently used data on the client.


// we can write code do handle all those problems , but that's extra code to maintain ,
// this is where react-query comes into the play

// libary for managing data-fecthcing and caching in the application 
// like redux which store state in global object , reduct is difficult to learn , so much boilerplate code
// redux no longer needed





