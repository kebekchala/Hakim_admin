import React ,{ useState } from "react";
import {Button, Modal} from "@themesberg/react-bootstrap";
import { BiLogIn } from "react-icons/bi";





export default function IdCardModal(props){
    const [showDefault, setShowDefault] = useState(false);
    const handleClose = () => setShowDefault(false);

    return(
        <>  
  <Button variant="info" className="my-3 w-100" onClick={() => setShowDefault(true)} >Show ID</Button>

  <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}> 
    <Modal.Header>
      <Modal.Title className="h6">ID Card</Modal.Title>
      <Button variant="close" aria-label="Close" onClick={handleClose} />
    </Modal.Header>
    <Modal.Body>
       { props.img 
            ?<img src={props.img} 
                className='img-thembnail' 
                alt="...."
                style={{maxWidth: '200px'}}/>
            :<p>{props.caseDescription}</p>
        }  
    </Modal.Body>
    <Modal.Footer>
      
    </Modal.Footer>
  </Modal>
</>
    )

}