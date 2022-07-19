// ------------------------------------------------Imports
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Filler = (props) => {
    // const [neededInfo, setNeededInfo] = useState(null);
    // const { category, id } = useParams();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     axios.get(`https://swapi.dev/api/${category}/${id}`)
    //         .then(result => setNeededInfo(result.data))
    //         .catch(err => {
    //             console.log(err);
    //             navigate("/error")
    //         });
    // }, [category, id]);

    return (
        <>
            <h1>Hello World!</h1>
            <h2>This will be the filler template.</h2>
        </>
    )
}

export default Filler;