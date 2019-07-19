import React from "react";
import { Card } from 'semantic-ui-react';

const PersonCard = (props) => {
  
  return(
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>Mass: {props.mass}</Card.Meta>
        <Card.Description>{props.mame} was born in {props.birth_year}</Card.Description>
      </Card.Content>
    </Card>
);
  };

export default PersonCard