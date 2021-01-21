import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {

    const { data, isPending, errormsg } =useFetch("http://localhost:8000/blogs")

    return (
        <div className="home">
            {errormsg && <div>{errormsg}</div>}
            {isPending && <div>loading.....</div>}
            {data && <Bloglist blogs={data} title="All blogs!" />}
        </div>
    );
}

export default Home;