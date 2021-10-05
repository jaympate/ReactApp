import React from "react";
import "./App.css";
import FileUpload from "./component/file-upload/FileUpload";
import Header from "./component/header/Header"
import Footer from "./component/footer/Footer"
import "bootstrap/dist/css/bootstrap.css";
import Summary from "./component/summary/Summary";

function App() {
    return (
        <div className="App">
            <Header />
            <Summary />
            <FileUpload />
            <Footer />
        </div>
    );
}

export default App;
