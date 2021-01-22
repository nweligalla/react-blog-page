import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Yoshi');
    const [isPending, setIspending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIspending(true);


        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added");
            setIspending(false);
            // history.go(-1);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>

                <label>Blog Title :</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(evt) => setTitle(evt.target.value)}
                />

                <label>Blog Body</label>
                <textarea
                    required
                    value={body}
                    onChange={(evt) => setBody(evt.target.value)}
                >
                </textarea>

                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(evt) => setAuthor(evt.target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog....</button>}

                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
    );
}

export default Create;