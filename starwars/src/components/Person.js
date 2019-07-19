import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonCard from './PersonCard';
import { Card } from 'semantic-ui-react';

const Person = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
      .then(response => {
        setData(response.data.results);
        console.log("swapi:", data.results);
      });
    }, []);

    return (
        <Card.Group itemsPerRow={5}>
            {data.map(data =>{
            return <PersonCard name={data.name} 
                               mass={data.mass}
                               birth_year={data.birth_year}/> })}
        </Card.Group>
    );
    }

export default Person;