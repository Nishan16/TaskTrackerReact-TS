import { stringify } from 'querystring';
import React, {useContext, useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import {v4} from 'uuid'
const MeetingsContext = React.createContext();


export function useMeetings(){
    return useContext(MeetingsContext);
}


export const MeetingsProvider = ({children})=> {
    const [meetings, setMeetings]= useLocalStorage('meetings',[]);



    function getMeetings(){

    }

    function addMeeting(name:String, time:String, description:String, location:String, meeting_link:String, attendees:String){
        setMeetings((prevMeetings:any) => {
            return [...prevMeetings, {
                id: v4(), name,time,description,location,meeting_link,attendees
            }]
        })
    }

    // function deleteMeeting(id:any){
    //     setMeetings((prevMeetings:any) => {
    //         return prevMeetings.filter(meetings => meetings.id !== id);
    //     })
    // }
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