import React, {Component} from 'react';
import Radio from '../components/Radio'; 

class AudioProducts extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          newUser: {
            reservationlessplus: [],
            operatorassisted: [],
            directevent: [],
            automated: [],
            reservationlessexpress: [],
          },
          reservationlessplusOptions: ['Optional', 'Required', "Don't Use"],
          operatorassistedOptions: ['Optional', 'Required', "Don't Use"],
          directeventOptions: ['Optional', 'Required', "Don't Use"],
          automatedOptions: ['Optional', 'Required', "Don't Use"],
          reservationlessexpressOptions: ['Optional', 'Required', "Don't Use"]
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
            <div className = 'divfloat'>
                <h4>Audio Product Options</h4>
                    <Radio  
                        title={'Reservationless Plus'}
                        name={'reservationlessplus'}
                        options={this.state.reservationlessplusOptions}
                        selectedOptions = { this.state.newUser.reservationlessplus}
                        handleChange={this.handleCheckRadio}
                        /> {/* ResPlus */}

                    <Radio  
                        title={'Operator Assisted'}
                        name={'operatorassisted'}
                        options={this.state.operatorassistedOptions}
                        selectedOptions = { this.state.newUser.operatorassisted}
                        handleChange={this.handleCheckRadio}
                        /> {/* Operator Assisted */}

                    <Radio  
                        title={'Direct Event'}
                        name={'directevent'}
                        options={this.state.directeventOptions}
                        selectedOptions = { this.state.newUser.directevent}
                        handleChange={this.handleCheckRadio}
                        /> {/* Direct Event */}

                    <Radio  
                        title={'Automated'}
                        name={'automated'}
                        options={this.state.automatedOptions}
                        selectedOptions = { this.state.newUser.automated}
                        handleChange={this.handleCheckRadio}
                        /> {/* Automated */}

                    <Radio  
                        title={'Reservationless Express'}
                        name={'reservationlessexpress'}
                        options={this.state.reservationlessexpressOptions}
                        selectedOptions = { this.state.newUser.reservationlessexpress}
                        handleChange={this.handleCheckRadio}
                        /> {/* Reservationless Express */}
            </div>
                  );
                }
              }
              
              export default AudioProducts;