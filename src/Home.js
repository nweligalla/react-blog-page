import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch("http://localhost:8000/blogs").then(res => {
            if (!res.ok) {
                throw Error("could not fetch data from the server!");
            }
            return res.json();
        }).then(data => {
            setBlogs(data);
            setIsPending(false);
        }).catch(err => {
            setError(err.message);
            setIsPending(false);
            setError(null);
        });
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>loading.....</div>}
            {blogs && <Bloglist blogs={blogs} title="All blogs!" />}
        </div>
    );
}

export default Home;