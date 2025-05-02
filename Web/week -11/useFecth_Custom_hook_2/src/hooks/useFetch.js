import { useEffect ,useState} from "react";


// custom hooks 
export function usePostTitle(){
    const [post, setPost] = useState({});

    async function getPosts(){
      const response  = await fetch("https://jsonplaceholder.typicode.com/posts/1");
       const json = await response.json();
       setPost(json);
    }
      // Use the useEffect hook to call the getPosts function when the component mounts
    useEffect( ()=>{
      getPosts();
    },[])

    return post.title;
}

// it a generic custom hook its take url(what you passed in url) and give some data 
export function useFetch(url){
  const[finalData, setFinalData] = useState({});


  async function getDetails(){
   const response = await fetch(url);
   const json = await response.json();
   setFinalData(json)
  }

  useEffect(()=>{
    getDetails();
  }, [])


  return {
    finalData
  }
}