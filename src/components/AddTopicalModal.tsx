import {useRef} from 'react';
import {Form, Modal} from "react-bootstrap"
import { useMeetings } from '../context/MeetingContext';


export default function AddTopicModal(show: any , handleClose:any){
    const nameRef = useRef();
    const { addMeeting } = useMeetings();
    function handleSubmit(e:any){
      e.preventDefault()
      addMeeting(
      {
        name: nameRef.current.value
      })
    }
    return(
      <>
        <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>New Meeting</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control ref={nameRef} type="text" required/>
            </Form.Group>
          </Modal.Body>
        </Form>
        </Modal>
      </>


    )

  }