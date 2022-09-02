import './App.css';
import React, { useState } from 'react';
import HideOrShow from './components/show-hide.js';
import DataBinding from './components/Data-Binding.js';
import DisableBTN from './components/disableBTN.js';
import Parent from './components/Parent.js';
import Calc from './components/Calc';
import Counter from './components/Counter.js';
import UserData from './components/FetchWithUseEffect.js';

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
    <DataBinding />
    <DisableBTN />
    <Parent />
    <Calc />
    <Counter />
    <UserData />
    </>

  );
}

export default App;
