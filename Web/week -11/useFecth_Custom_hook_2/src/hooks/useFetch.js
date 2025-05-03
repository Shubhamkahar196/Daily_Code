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
  const [loading, setLoading] = useState(true)
  

  async function getDetails(){
    setLoading(true);    // first true 
   const response = await fetch(url);
   const json = await response.json();
   setFinalData(json)
   setLoading(false)  // after false 
  }

  useEffect(()=>{
    getDetails();
  }, [url])
  // url in dependency and they update when the click on button they change the url from 1 to 2 to 3
 
  // they show loading for 10sec 
  useEffect(() =>{
    setInterval(getDetails, 10*1000)
  },[])

  return {
    finalData,
    loading
  }
}