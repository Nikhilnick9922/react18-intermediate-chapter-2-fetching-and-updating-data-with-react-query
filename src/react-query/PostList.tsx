 
import { useState } from 'react';
import usePosts from '../hooks/usePosts';

 

const PostList = () => {
 
  const pageSize = 10;  // since the pageSize is not going to change it constant, in futreu use state
  const [page,setPage] = useState(1);



 
 const {data:posts , error , isLoading} = usePosts({page,pageSize} )  // don't want to pass multiple values , so that makes it ugly
 // it would be nice if we can encapsulted all those value in query object
 
  if(isLoading) return <p>Loading...</p>
  
  if (error) return <p>{error?.message}</p>;

  return (
  <>
 
    <ul className="list-group">
      {posts?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
    <button onClick={()=> setPage(page-1)} disabled = {page===1} className="btn btn-primary my-3 me-1">Previous</button>
    <button onClick={()=> setPage(page + 1)}   className="btn btn-primary my-3">Next</button>
 
  </>
  );
};

export default PostList;

 

//  first we can remove filtering by user so that we can focus on pagination

// ms - margin start me - margin end

//  keepPreousData will keep currentdata intil frame until next data is loaded