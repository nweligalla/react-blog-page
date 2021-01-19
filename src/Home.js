import { useState } from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState(
        [
            { title: "My new website", body: "uoiwegwefuguofebekfhwefuio efuiweghfiuewgfweuio", author: "mario", id: 1 },
            { title: "Welcome Party", body: "uoiwegwefuguofebekfhfgdfwefuio dfgd efuiweghfiuewgfweuio", author: "yoshi", i: 2 },
            { title: "Web dev tips", body: "uoiwegwefuguofebekfhwefuio dfgdfgg efuiweghfiuewgfweuio", author: "mario", id: 3 },
        ]
    );

    return (
        <div className="home">
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>By: {blog.author}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Home;