import React from 'react';
import { useParams } from 'react-router-dom';
const blogPosts = [
    'first post',
    'second post',
    'third post'
];

function Blog() {

    const params = useParams();
    console.log(params.blogId);

    return (
    <div>{blogPosts[params.blogId]}</div>
    );
}

export default Blog;
