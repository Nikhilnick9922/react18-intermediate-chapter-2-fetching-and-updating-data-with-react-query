import { useQuery } from "@tanstack/react-query";
import axios from "axios";


interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

const usePosts = (userId :number | undefined)=>{  // because initially no user is selected

 

    const fecthPosts = ()=>  axios
.get('https://jsonplaceholder.typicode.com/posts',{params:{userId}}).then(res=>res.data)

// it expecting object so its like {userIs : userIs } or {userId}
 return useQuery<Post[],Error>({
    // queryKey : ['Posts'],
    queryKey :userId? ['users',userId,'Posts'] : ['Posts'], // this is same pattern we follow , when designing urls for our api's
    // /users/1/posts       // left to right data becomes more specific
    queryFn :  fecthPosts,
    staleTime : 1 * 60 * 1000 // 1m
  })

}

export default usePosts;


// now we need to structure our keys little bit different


// everytime userId changes our queryKey changes same as dependencies array 
//now we need to pass userId to backEnd , jsonplace holder supports url using params 