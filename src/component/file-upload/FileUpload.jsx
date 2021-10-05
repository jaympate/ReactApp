import React, { Component } from "react";
import axios from "axios";
import * as styles from "./FileUpload.module.css";
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import Loading from './LoadingScreen'
import Form from 'react-bootstrap/Form'

export default class FileUpload extends Component {

    state = {
        fileToUpload: undefined,
        uploadSuccess: undefined,
        downloadSuccess: undefined,
        error: undefined,
        showNotification: true,
        fileNameinS3: "",
        loadingScreen: false,
        fileContent: "",
        downloadUrl:"",
        teamname:"",
        filetypeerror:false,
        iszip:false,
    };
    
    toggleShowNotification =() => {
        this.setState({showNotification: !this.state.showNotification});
    }

    toggleLoadingScreen =() => {
        this.setState({loadingScreen: !this.state.loadingScreen});
    }

    fileerror(){
        alert("FileType Error, Please Upload file in .zip format")
        window.location.reload(true)
    }
   
   
    uploadFile() {
        // Getting the signed url
        this.setState({loadingScreen:true})
        console.log(this.state.fileToUpload.type);
        axios(
            "https://e9g5ualnf2.execute-api.us-east-1.amazonaws.com/dev/upload?fileName=" +
            this.state.fileNameinS3 + "&teamName=" + this.state.teamname
        ).then(response => {
            // Getting the url from response
            const url = response.data.fileUploadURL;

            axios({
                method: "PUT",
                url: url,
                data: this.state.fileToUpload,
                headers: { "Content-Type": "multipart/form-data" }
            })
                .then(res => {
                    this.toggleLoadingScreen();
                    this.setState({
                        uploadSuccess: "File upload successfull",
                        error: undefined,

                    });
                })
                .catch(err => {
                    this.setState({
                        error: "Error Occured while uploading the file",
                        uploadSuccess: undefined
                    });
                });
        });
    }

    render() {
        return (
            <div>
               <div><Loading value = {this.state.loadingScreen}/></div> 
            <div className={styles.fileUploadCont}>
                <div className={styles.header}>
                    
                </div>
                <div>
                    <form>
                        <div className="form-group">
                            <input
                                type="file"
                                className="form-control-file"
                                id="fileUpload"
                                onChange={e => {
                                    if(e.target.files[0].type === "application/x-zip-compressed"){
                                    this.setState({
                                        fileToUpload: e.target.files[0],
                                        fileNameinS3:(Math.floor(Math.random()*90000) + 10000) + '_' + e.target.files[0].name,
                                        iszip: true
                                    });}
                                    else{
                                        this.setState({
                                          
                                            filetypeerror: true
                                        });
                                    }
                                }}
                               
                            />
                            <br/><br/>
                            {this.state.filetypeerror ? (
                                
                                this.fileerror()
                               
                            ) : null}
                            {this.state.fileToUpload && this.state.iszip === true ? (
                            <Form.Group>         
                            <Form.Label>
                            Enter your Teamname:
                            </Form.Label>
                            <Form.Control size="sm" as="input" value={this.state.teamname} onChange={e => {this.setState({teamname: e.target.value})}} >
                            
                            </Form.Control>
                            </Form.Group>
                                
                               
                            ) : null}
                            
                            <div className="row">
                            {this.state.fileToUpload && !this.state.uploadSuccess && this.state.iszip ? (
                                <Button variant="outline-primary"
                                    onClick={e => {
                                        this.uploadFile();
                                    }}
                                 className="col-12 col-sm-6 col-md-6"   
                                >
                                    Upload
                                </Button>
                               
                            ) : null}

                            </div>

                               
                        </div>
                    </form>
                </div>
            </div>
             <div>

             {this.state.uploadSuccess
                     ? 
             <Toast show={this.state.showNotification} onClose={this.toggleShowNotification}
             style={{
                position: 'absolute',
                top: 70,
                right: 10,
              }}
             >
                 <Toast.Header>
                     <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                     <strong className="mr-auto">Notification</strong>
                     <small>just now</small>
                 </Toast.Header>
                 <Toast.Body><span>
                 {this.state.uploadSuccess
                     ? "Results have been uploaded to S3 successfully"
                     : ""}
             </span></Toast.Body>
             </Toast>
            : ""}
         </div>

         </div>
        );
    }
}
