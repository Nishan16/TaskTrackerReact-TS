import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MeetingsProvider, useMeetings} from "./context/MeetingContext";
import DashBoard from './components/Dashboard';


function App() {
  const {meetings} = useMeetings();
  return (
    <>
    <MeetingsProvider>
    <DashBoard/>
    </MeetingsProvider>
    </>
    
  );
}

export default App;
