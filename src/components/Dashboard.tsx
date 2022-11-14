import {useState} from 'react';
import TopicDescription from './TopicDescription';
import {MeetingsProvider, useMeetings} from "../context/MeetingContext";
import AddTopicModal from './AddTopicModal';
import EditTopicModal from './EditTopicModal';
//This page is the container for all componets

export default function Dashboard(){
    const [showAddMeetingModal, setShowAddMeetingModal] = useState(false)
    const [showEditMeetingModal, setShowEditMeetingModal] = useState(false);
    const [editMeetingID, setShowEditMeetingID] = useState(Number);
    const {meetings} = useMeetings();
    return(
        
        <>
         <div className='container'>
            <div className='header' >
                    <h1 style={{
                        padding:0,
                        margin:0,
                        font: 'Bebas Neue',
                    }}>Meeting Agenda</h1>
            </div>
  
                <button onClick={() => setShowAddMeetingModal(!showAddMeetingModal)}>
                    <span>New</span>
                </button>
            <AddTopicModal  key = {showAddMeetingModal} show={showAddMeetingModal} closeModal={setShowAddMeetingModal} />
            <EditTopicModal key = {showEditMeetingModal} show={showEditMeetingModal} closeModal={setShowEditMeetingModal} id={editMeetingID} ></EditTopicModal>

        </div>
        <div className={!(showAddMeetingModal || showEditMeetingModal)? "Descriptions" : "DescriptionsClear"}>
        {meetings.map((meeting:any)=> {
            return(
                <TopicDescription key={meeting.id} props={meeting} setEditMeeting={setShowEditMeetingModal} setEditMeetingID={setShowEditMeetingID} />
            )
            
        })  
        }
        </div>
        </>
    )
    

}
        