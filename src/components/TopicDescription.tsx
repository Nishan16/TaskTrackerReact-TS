import react from 'react';
import "../styles.css"
import meetings from "../meetings.json";
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { isPropertySignature } from 'typescript';

function edit(id:number,){
	console.log("hello " + id);
}


function TopicDescription (props: any){
    return(
        <>
            <div className='Description'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
<div id="container">	
	
	<div className="product-details">
		
	<h1>{props.meeting.name}</h1>
		
			<p className="information">{props.meeting.description}</p>

		
		
<div className="control">
	
	<button className="btn">
   <span className="buy">Go to meeting</span>
 </button>
 <button className="btn" onClick={() => props.setStateofParent(props.index)}> 
<span>Delete</span>
</button>
<button className="btn" onClick={() => edit(props.index)}>
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
		<li><strong>Location: </strong>{props.meeting.location}</li>
		<li><strong>Attendees: </strong>{props.meeting.attendees}</li>

		
	</ul>
</div>
</div>

</div>





            </div>
        </>
    );
}
export default TopicDescription;