import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, errormsg } = useFetch(`http://localhost:8000/blogs/${id}`);

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {errormsg && <div>Oooops! Some kind of error occured</div>}
            {blog &&
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                </article>}

        </div>
    );
}

export default BlogDetails;