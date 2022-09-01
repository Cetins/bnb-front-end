import React from "react";
import LoginButton from "./LoginButton";

const LogComponent = () => {

    return (
        <div className="log-child">
            <h3>Please login to continue to your account</h3>
            <div>
                <LoginButton />
            </div>
        </div>
    )
}

export default LogComponent;