import { useInfiniteQuery   } from "@tanstack/react-query";
import axios from "axios";


interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

  interface PostQuery {
    // page: number,
    pageSize : number
  }

 const usePosts = (query : PostQuery)=>{  

 
 
 
 return useInfiniteQuery<Post[],Error>({
      queryKey : ['posts', query], 
     queryFn :  ({pageParam = 1}  )=> axios    // best practice is initialize to 1 , so that we can get data for the first page
     .get('https://jsonplaceholder.typicode.com/posts',{
       params:{
          _start:(pageParam - 1) * query.pageSize,
          _limit : query.pageSize
         }})
    .then(res=>res.data),
    staleTime : 1 * 60 * 1000, // 1m ,
    keepPreviousData :  true,
 
    getNextPageParam:(lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    }
 
  })

}

export default usePosts;

 
//   when we use infinite scrolling , we can't use state since it makes inconsistance with 
          //  paging and caching
          // and they handle pagination automatically

//  for nextPageParam logic this is best we can do , since good api should return 
//  number of pages ahead of time 

//  when user clicks on loadMore button react-query calls this function 


//  pageParam is object that react-query will pass to queryFn , & replace query.page with pageParam



// installed react-query@4.28