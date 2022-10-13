import react from 'react';
import Header from './Header';
import TopicDescription from './TopicDescription';
//This page is the container for all componets

class Dashboard extends react.Component<{}, {title: string, meetings: any}>{

    constructor(props: any){
        super(props);
        this.setStateofParent.bind(this);
        this.state = { 
            title : "",
            meetings:
            [ {
                "name":"First Meeting",
                "time": "11:30",
                "description":"This is the description of the modal. This meeting will discuss everything happening for the company.",
                "location" : "Waterloo Office",
                "meeting-link" : "",
                "attendees" : "Ayesha, Nishan"
         
             },
             {
            
               "name":"First Meeting",
               "time": "11:30",
               "description":"This is the description of the modal.",
               "location" : "Waterloo Office",
               "meeting-link" : "",
               "attendees" : "Ayesha, Nishan"
         
            },
            {
               "name":"First Meeting",
               "time": "11:30",
               "description":"This is the description of the modal. This meeting will discuss everything happening for the company.",
               "location" : "Waterloo Office",
               "meeting-link" : "",
               "attendees" : "Ayesha, Nishan"
         
            }
           ]
         };
    }

    setStateofParent = (index: number) => {
        this.setState({title:"hello"});
        console.log(this.state.title);
    }
    render(){
        return(
        <ul>
            <Header/>
            {this.state.meetings.map((item:any) =>{
                let props = {
                    "meeting" : item,
                    "index" :this.state.meetings.indexOf(item)
                }
                return(
                        <TopicDescription  setStateofParent = {this.setStateofParent} key={this.state.meetings.indexOf(item)} {...props}></TopicDescription> 
    
    
                );
            }
            ) }
        </ul>
    
        );
            }
}

export default Dashboard;