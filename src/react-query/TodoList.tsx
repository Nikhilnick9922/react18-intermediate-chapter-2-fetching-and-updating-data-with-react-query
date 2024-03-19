 import useTodos from '../useTodos';  
 
const TodoList = () => {

  // const fetchTodos =()=>  
  //       axios
  //            .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  //            .then(res=>res.data)     

  const {data : todos , error , isLoading} = useTodos();
  // useQuery<Todo[] , Error  >({  
  //   queryKey : ['todos' ],
  //   queryFn :  

  // })

  if(isLoading) return <p>Loading....</p>
 
if(error) return <p>{error.message}</p>
  
  return (
    <ul className="list-group">
      {todos?.map((todo) => (    
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};  

export default TodoList;


 
 

// there is problem in here 
// we don't have seperation of concerns 
// because querying logic leaked inside our component 
//  so we should extract quering logic inside seperate reusable hook


//  now our component is purely concerned about markup ,  it doesnt know how the 
// data should be fecthed 
// if somewhere if we required list of todos that place we can use useTodo hook