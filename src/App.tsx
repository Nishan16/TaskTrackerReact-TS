import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MeetingsContext} from "./context/MeetingContext";
import DashBoard from './components/Dashboard';

function App() {
  return (
    <>
    <MeetingsContext>
      <DashBoard/>
    </MeetingsContext>
    </>
  );
}

export default App;
