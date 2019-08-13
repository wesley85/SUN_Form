import React, {Component} from 'react';
import Radio from '../components/Radio'; 

class PacAssistantInfo extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          newUser: {
            pac: [],
            assistantinfo: [],
          },
          pacOptions: ['Optional', 'Required', "Don't Use"],
          assitantinfoOptions: ['Optional', 'Required', "Don't Use"]
        }
        this.handleCheckRadio = this.handleCheckRadio.bind(this);
    }

    handleCheckRadio(e) {
      const newSelection = e.target.value;
      let newSelectionArray;
  
      if(this.state.newUser.skills.indexOf(newSelection) > -1) {
        newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection)
      } else {
        newSelectionArray = [...this.state.newUser.skills, newSelection];
      }
  
        this.setState( prevState => ({ newUser:
          {...prevState.newUser, skills: newSelectionArray }
        })
        )
    }

    render() {
        return (
            <div className = 'divSpacing'>
                <Radio  
                    title={'PAC'}
                    name={'pac'}
                    options={this.state.pacOptions}
                    selectedOptions = {this.state.newUser.pac}
                    handleChange={this.handleCheckRadio}
                    /> {/* PAC */}

                <Radio  
                    title={'Assistant Info'}
                    name={'assistantinfo'}
                    options={this.state.assitantinfoOptions}
                    selectedOptions = { this.state.newUser.assistantinfo}
                    handleChange={this.handleCheckRadio}
                    /> {/* Assistant Info */}
            </div>
                  );
                }
              }
              
              export default PacAssistantInfo;