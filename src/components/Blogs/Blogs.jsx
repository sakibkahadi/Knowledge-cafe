import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';
const Blogs = ({handleAddToBookmark, handleMakAsRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.js')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            <div>
                {
                    blogs.map(blog => <Blog
                         key={blog.id}
                         handleMakAsRead={handleMakAsRead}
                          handleAddToBookmark={handleAddToBookmark} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};
Blogs.propTypes ={
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMakAsRead: PropTypes.func.isRequired
}

export default Blogs;