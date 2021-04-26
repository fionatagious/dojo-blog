// useState hook to make blogs reactive and output list of blogs

import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: ' blog1', body: 'blog1_description', author: 'fiona', id: 1 },
        { title: 'blog2', body: 'blog2_description', author: 'brandon', id: 2 },
        { title: 'blog3', body: 'blog3_description', author: 'ben', id: 3 }
    ])
;

// cycle through each blog object in the blogs array (map) and render jsx template with blog properties (title, id, author)
// react uses key attribute to keep track of each item in array 
    return ( 
        <div className="home">
            {blogs.map( (blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div> 
            ))}
        </div>
     );
}
 
export default Home;