import './App.css';
import React, { useState } from 'react';
import HideOrShow from './show-hide.js';

function App() {

  const users = [
    {name: "John", id:1},
    {name: "Anna", id:2},
    {name: "Sophie", id:3},
  ]

const userItems = users.map((user) => <li key={user.id}>{user.name}</li>)

  return (
    <>
    <ul>{userItems}</ul>
    <HideOrShow />
    </>

  );
}

export default App;
