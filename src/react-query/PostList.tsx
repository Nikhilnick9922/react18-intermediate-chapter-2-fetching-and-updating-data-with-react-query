 
 import usePosts from '../hooks/usePosts';
import React from 'react';

 

const PostList = () => {
 
  const pageSize = 10;  
  // const [page,setPage] = useState(1);



 
 const {data , error , isLoading ,fetchNextPage ,isFetchingNextPage} = usePosts({pageSize} )   
  
  if(isLoading) return <p>Loading...</p>
  
  if (error) return <p>{error?.message}</p>;

  return (
  <>
 
    <ul className="list-group">
      {data?.pages.map((page, index)=>
        <React.Fragment key={index}>
          {page.map(post=><li key={post.id} className="list-group-item">
          {post.title}
        </li>)}
        </React.Fragment>)}
      
    </ul>
    {/* <button onClick={()=> setPage(page-1)} disabled = {page===1} className="btn btn-primary my-3 me-1">Previous</button> */}
    <button disabled= { isFetchingNextPage} onClick={()=>  fetchNextPage ()}   className="btn btn-primary my-3">
      {isFetchingNextPage ? "Loading...": "Load More"}</button>
 {/* inifite query returns fecchNext function */}
  </>
  );
};

export default PostList;

 

//   so fetchNextPage will call getNextPageParam then it will pass it to queryFn


//  isFetchinNextpage is use to disable the button 


// is data is no longer posts array , its object of inifinte pages , which includes posts