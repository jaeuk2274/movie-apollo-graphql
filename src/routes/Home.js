import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const GET_MOIVES = gql`
{
    movies{
        id
        title
        medium_cover_image
    }
}
`;

export default () => {
    const { loading, error, data } = useQuery(GET_MOIVES);
    console.log("test!!!!", loading, error, data);

    if(loading){
        return "loading...";
    }
    
    if(data && data.movies){
        console.log(data);
        return data.movies.map(m=><h1>{m.id} / {m.title}</h1>);
    }

};