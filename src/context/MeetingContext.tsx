import React, {useContext, useState} from 'react';

const MeetingsContext = React.createContext();


export function useMeetings(){
    return useContext(MeetingsContext);
}


export const MeetingsProvider = ({children})=> {
    const [meetings, setMeetings]= useState([]);



    function getMeetings(){

    }

    function addMeeting(){
        setMeetings(prevMeetings => {
            return [...prevMeetings, {id:}]
        })
    }

    function deleteMeeting(id){
        setMeetings(prevMeetings => {
            return prevMeetings.filter(meetings => meetings.id !== id);
        })
    }
    return (
        <MeetingsContext.Provider value={{
            meetings,
            getMeetings,
            addMeeting,
            deleteMeeting,
        }} >
        {children} 
        </MeetingsContext.Provider>

    )
}