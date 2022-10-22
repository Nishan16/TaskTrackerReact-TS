import {useState} from 'react';
import "../styles.css"
import AddTopicModal from './AddTopicModal';
function Header(){
    const [showAddMeetingModal, setShowAddMeetingModal] = useState(false)
    
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
  
                <button onClick={() => setShowAddMeetingModal(false)}>
                    <span>New</span>
                </button>
            <AddTopicModal show={showAddMeetingModal} handleClose={() => setShowAddMeetingModal(true)}/>
        </div>
    </> );

}

export default Header;