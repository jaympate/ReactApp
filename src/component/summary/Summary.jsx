import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'


const Summary = () => {
    return (
        <Jumbotron>
            <h1>Hello, Participant!</h1>
            <p>
            This is a utility to upload your Hackathon Videos/PPT/Code.
                <br></br>
                Please Upload a Zip file containing all the Files you need to Submit(Only Zip Files Allowed)
                <br></br>  
                Files greater than 10 Mb in size may take 60-80 seconds to upload.                             
            </p>
                             
        
        </Jumbotron>
    )
}

export default Summary;
