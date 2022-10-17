import {useState} from 'react';
import "../styles.css"
import AddTopicModal from './AddTopicalModal';
function Header(){
    const [showAddMeetingModal, setShowAddMeetingModal] = useState(boolean)
    
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
  
                <button onClick={() => setShowAddMeetingModal(true)}>
                    <span>New</span>
                </button>
            <AddTopicModal show={showAddMeetingModal} handleClose={() => setShowAddMeetingModal(false)}/>
        </div>
    </> );

}

export default Header;