import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Ooooops....</h2>
            <p>The page you are looking cannot be found</p>
            <Link to="/">Return to home page</Link>
        </div>
    );
}
 
export default NotFound;