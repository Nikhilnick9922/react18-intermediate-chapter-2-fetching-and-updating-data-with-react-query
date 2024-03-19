 
import { useState } from 'react';
import usePosts from '../hooks/usePosts';

 

const PostList = () => {
 
 const [userId, setUserId]=useState<number>()

 const {data:posts , error , isLoading} = usePosts(userId)
 

  if(isLoading) return <p>Loading...</p>

  if (error) return <p>{error.message}</p>;

  return (
  <>
  <select onChange={(e)=> setUserId(parseInt(e.currentTarget.value))} value={userId} className="form-select mb-3">
          <option value=""></option>
          <option value="1">User 1</option>
          <option value="2">User 2</option>
          <option value="3">User 3</option>    
          {/* now we need state variable for maintain state selectedUser , as user changes our list also changes*/}
  </select>
    <ul className="list-group">
      {posts?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  </>
  );
};

export default PostList;


// in real world we shoud extract the list of users dynamically 
// that's distraction of what we are doing her e
// so we going to do hardcoded