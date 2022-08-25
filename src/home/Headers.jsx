import React from "react";

const Titles = () => {
    const MainTitle = ({ title }) => {
        return <h1 className="main-title" >{ title }</h1>
    }

    const SecondTitle = ({ title }) => {
        return <h2 className="second-title" >{ title }</h2>
    }

    const SmallTitle = ({ title }) => {
        return <h3 className="small-title" >{ title }</h3>
    }

    const Text = ({ context }) => {
        return <p className="text-context" >{ context }</p>
    }
}

export {MainTitle, SecondTitle};