import React from "react";
import api from "../helpers/api";

interface Post {
    id: string;
    title: string;
    content: string | undefined;
    price: number;
    image: string | undefined;
}

const Posts = async () => {
    let posts: Post[];

    const res = await api('http://localhost:8080/api/v1/posts?skip=0&take=10', {
        cache: 'no-store'
    });
    posts = res.resData;


    return (
        <>
            <h1>Post List</h1>
            <ul>
                {
                    posts.map(post => <li key={post.id}>
                        {post.title}
                    </li>)
                }
            </ul>
        </>
    )
};

export default Posts;

