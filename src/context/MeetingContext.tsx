import { AllByAttribute } from '@testing-library/react';
import { stringify } from 'querystring';
import React, {useContext, useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import {uid} from "uid"
type MeetingsProviderProps = {
    children: React.ReactNode
}

type MeetingsContext = {
    meetings : []
    addMeeting: (name:String, time:String, description:String, location:String, meeting_link:String, attendees:String) => void
    getMeetings: () => void
    deleteMeeting: (id:any) => void
    editMeeting:(id:any, name:String, time:String, description:String, location:String, meeting_link:String, attendees:String) => any
}
const MeetingsContext = React.createContext({} as MeetingsContext);


export function useMeetings(){
    return useContext(MeetingsContext);
}


export function MeetingsProvider  ({children}: MeetingsProviderProps ) {
    const [meetings, setMeetings]= useLocalStorage('meetings',[]);



    function getMeetings(){

    }

    function addMeeting(name:String, time:String, description:String, location:String, meeting_link:String, attendees:String){
        setMeetings((prevMeetings:any) => {
            return [...prevMeetings, {
                id: uid() , name,time,description,location,meeting_link,attendees
            }]
        })
    }

    function deleteMeeting(id:any){
        setMeetings((prevMeetings:any) => {
            return prevMeetings.filter((meeting:any) => meeting["id"] !== id);
        })
    }

    function editMeeting(id:any, name:String, time:String, description:String, location:String, meeting_link:String, attendees:String){
        setMeetings((prevMeetings:any) => {
            var oldMeetings = prevMeetings.filter((meeting:any) => meeting["id"] !== id);
            return [...oldMeetings, {
                id,name,time,description,location,meeting_link,attendees
            }]
        })}
    return (
        <MeetingsContext.Provider value={{
            meetings,
            getMeetings,
            addMeeting,
            deleteMeeting,
            editMeeting
        }} >
        {children} 
        </MeetingsContext.Provider>

    )
}
