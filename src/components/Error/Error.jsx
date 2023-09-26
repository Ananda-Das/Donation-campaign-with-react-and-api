// import React from 'react';

import { Link, useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="text-5xl">Opps!!! Something Wrong</h1>
            <div className="link__404">
            <button onClick={() => navigate(-1)}>Back </button>
             <Link to={"/"}>Back to Home</Link>
          </div>
        </div>
    );
};

export default Error;