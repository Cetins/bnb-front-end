import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const LogComponent = () => {

    return (
        <div className="parent-container">
            <div className="log-child">
                <LoginButton />
                <LogoutButton />
            </div>
        </div>
    )
}

export default LogComponent;