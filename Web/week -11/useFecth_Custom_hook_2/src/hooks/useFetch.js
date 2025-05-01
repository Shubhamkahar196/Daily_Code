import { useEffect ,useState} from "react";

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