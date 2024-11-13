import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Todo from './components/Todo';
import Update from './components/Update';
import UpdateP from './components/UpdateP';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/update/:id" element={<Update />} />
      <Route path="/updatep/:id" element={<UpdateP />} />
    </Routes>
  );
}

export default App;
