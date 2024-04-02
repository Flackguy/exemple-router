import React from 'react';
import { Link } from "react-router-dom";

export default function Accueil(){

    return(
        <>
            <h1>Accueil</h1>
            <Link to={`/Detail`}>{`Detail`}</Link>
        </>
    )
}