import axios from "axios";

export default async function BlogPage({params} : any){



   
    const postId = (await params).postId;
    //  fetching data from api
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
     const data = response.data;

    return <div>
        BlogPage {postId}

        <br />
        title - {data.title}
        <br />
        body - {data.body}
    </div>
}

// fetching data from api

// make a function async
