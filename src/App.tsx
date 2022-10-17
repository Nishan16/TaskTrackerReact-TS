import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MeetingsProvider} from "./context/MeetingContext";
import DashBoard from './components/Dashboard';

function App() {
  return (
    <>
    <MeetingsProvider>
      <DashBoard/>
    </MeetingsProvider>
    </>
  );
}

export default App;
