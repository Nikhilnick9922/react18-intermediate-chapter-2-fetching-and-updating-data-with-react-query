import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';  
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';      // imported 
 

 

const queryClient = new QueryClient(
//   {
//   defaultOptions : {
//     queries : {
//       retry : 3,
//       refetchInterval : 300_000, //5m   cacheTime replace with refechInterval
//       staleTime :  5 * 1000,   // how much time data consider as fresh
//       refetchOnWindowFocus : false,
//       refetchOnReconnect : false,  // if client goes offline and comes online it refresh
//       refetchOnMount : false

//     }
//   }
// }
); 

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
<React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools/>
    </QueryClientProvider>
</React.StrictMode>
);


//  react will automatically stales the data in 3 situations 
        // when network is reconnected
        // when a componet is mounted
        // when window is refocused       - new tab shift 
 

 

        // only value we have to change sometimes is staleTime , needed higher stale-time for some queries 




  //  we can also overrighte default setting in useQuery in component -> useTodos 