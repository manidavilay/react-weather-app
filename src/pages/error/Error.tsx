import { Link } from "react-router-dom";
import "./Error.scss";

const Error = () => {
    return (
        <div className="error-page">
            <div className="error-page__container">
                <h1 className="title">Oops ! Page not found...</h1>
                <p className="text">Looks like you're looking too far up in the sky...</p>
                <p className="text">But let's get back on earth by clicking <Link to="/">here</Link></p>
            </div>
        </div>
    )
};

export default Error;