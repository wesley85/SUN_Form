import React, {Component} from 'react';  
import CustInfo from './CustInfo';
//import CompanyInfo from './CompanyInfo';
//import AccountInfo from './AccountInfo';
import PacAssistantInfo from './PacAssistantInfo';
import AudioProducts from './AudioProducts'
import WebProducts from './WebProducts';
/* Import Components */
import Button from '../components/Button';
import '../App.css';

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
      },
    }
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, about: value
      }
      }), ()=>console.log(this.state.newUser))
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch('http://example.com',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
  }   

  
  render() {
    return (
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
            {/* Requestor Info */}
            <CustInfo />

            {/* PAC and Assistant info section */}          
            <PacAssistantInfo />
          
            {/* Audio Products */}
            <AudioProducts />

            {/* Web Products */}
            <WebProducts />

            {/* optional options */}
            <div className = "divclear">
            <Button
                className = "buttonStyle"
                action = {this.handleFormSubmit}
                type = {'primary'} 
                title = {'Submit'} 
            /> { /*Submit */ }
          </div>
        </form>
  
    );
  }
}

export default FormContainer;