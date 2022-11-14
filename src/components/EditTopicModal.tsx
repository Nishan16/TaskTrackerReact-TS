import {useState, useEffect, useRef} from 'react';
import { useMeetings } from '../context/MeetingContext';
import "../modal.css"
import "../styles.css"


export default function EditTopicModal({show, closeModal, id}:any){

    const {meetings, editMeeting} = useMeetings();
    const name = useRef()
    const location = useRef()
    const description = useRef()
    const attendees = useRef()
    const time = useRef()
    const meeting_link = useRef()
    function submit(){
      if(name?.current?["value"] && time?.current?["value"] && description?.current?["value"] && location?.current?["value"] && meeting_link?.current?["value"] && attendees?.current?.value){
        editMeeting(id,name?.current?["value"]:any , time.current.value, description.current.value, location.current.value, meeting_link.current.value, attendees.current.value)
      }
    }
    if(show){
      return (
          <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button 
                onClick={() => {
                  closeModal(false)
                }}
              >
                X
              </button>
            </div>
            <div className="title">
              <h1>Edit Existing Meeting</h1>
            </div>
            <form>
            <div className="bodyModal">
              <div>
                <div className="">
                  <input className="form-field" ref={name}  placeholder="name" required/>
                  </div>
                  <div className="">
                  <input className="form-field" ref={description} placeholder="Description" required/>
                  </div>
                </div>
              <div>
                <div className="">
                <input className="form-field" ref={time} placeholder="Time" required/>
                </div>
                <div >
                <input className="form-field" ref={attendees}placeholder="Attendees" required/>
              </div>
              </div>
              <div>
                <div className="">
                <input className="form-field" ref={location} placeholder="Location" required />
                </div>
                <div className="">
                <input className="form-field" ref={meeting_link} placeholder="Meeting Link" required/>
                </div>
              </div>
          
          
            </div>
          <div className="footer">
              <button className='btn' onClick={()=>
              submit() }
                  ><span>Submit</span></button>
            </div>
            </form>
      
        </div>
        </div>
      );
  }
  return null;
}