import React, { useState } from 'react';
import { Form, Button, Navbar } from 'react-bootstrap';

function CharacterForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted: ${name}, ${description}`);
    // Add code to create character here
  }

  return (
    <div><Navbar variant="dark">
    <Navbar.Brand>Welcome to Infinitron.</Navbar.Brand>
  </Navbar><Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Character Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="What's your name?"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>
      <br/>
      <Form.Group controlId="formDescription">
        <Form.Label>Character Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="What's your deal?"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create Character
      </Button>
    </Form>
    </div>
  );
}

export default CharacterForm;