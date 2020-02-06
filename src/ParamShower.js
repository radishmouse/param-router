import { useParams } from 'react-router-dom';
import React from 'react';

function ParamShower() {
    const { value } = useParams();

    return (
        <h1>{value}</h1>
    );
}

export default ParamShower;