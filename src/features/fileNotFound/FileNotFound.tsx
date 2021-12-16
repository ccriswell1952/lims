import React from "react";
import { Link } from "react-router-dom";

const FileNotFound = () => {
    return (  
        <div className="file-not-found">
            <h2>Sorry</h2>
            <p>The file you're attempting to access is not available.</p>
            <Link to="/">Back to Home Page...</Link>
        </div>

    );
}
 
export default FileNotFound;