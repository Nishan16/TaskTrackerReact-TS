import {useState} from 'react';
import { useMeetings } from '../context/MeetingContext';
import "../styles.css"
import EditTopicModal from './EditTopicModal';


function TopicDescription ({setEditMeeting, setEditMeetingID, props}:any){
	const {deleteMeeting} = useMeetings();
	function edit(id:any){
		setEditMeeting(true)
		setEditMeetingID(id);
	}
    return(
			<>
			<div className='Description'>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
				<div id="container">	
					
					<div className="product-details">
						
					<h1>{props.name}</h1>
						
							<p className="information">{props.description}</p>

						
						
				<div className="control">
					
					<a className="btn" href={props.meeting_link} target="_blank">
				<span className="buy">Go to meeting</span>
				</a>
				<button className="btn" onClick={() => deleteMeeting(props.id)}> 
				<span>Delete</span>
				</button>
				<button className="btn" onClick={() => edit(props.id)}>
				<span>Edit</span>
				</button>
				</div>
							
				</div>
					
				<div className="product-image">
					
					<img src="https://media.istockphoto.com/vectors/video-conference-theme-vector-id1306175866?k=20&m=1306175866&s=612x612&w=0&h=gwISECHXZ_pSQKU8j8E9fNYR81MllQT4JWzF--xsPcE=" alt=""/>
					

				<div className="info">
					<h2> More Info</h2>
					<ul>
						<li><strong>Time: </strong>{props.time}</li>
						<li><strong>Location: </strong>{props.location}</li>
						<li><strong>Attendees: </strong>{props.attendees}</li>

						
					</ul>
				</div>
				</div>

				</div>



							</div>
						</>
				
					);
}
export default TopicDescription;