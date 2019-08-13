import React, {Component} from 'react';
import Radio from '../components/Radio'; 

class WebProducts extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          newUser: {
            unifiedmeeting: [],
            livemeeting: [],
            webex: [],
            adobe: [],
            lotuslive: [],
          },
          unifiedmeetingOptions: ['Optional', 'Required', "Don't Use"],
          livemeetingOptions: ['Optional', 'Required', "Don't Use"],
          webexOptions: ['Optional', 'Required', "Don't Use"],
          adobeOptions: ['Optional', 'Required', "Don't Use"],
          lotusliveOptions: ['Optional', 'Required', "Don't Use"] 
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
                <h4>Web Products</h4>
                    <Radio  
                        title={'Unified Meeting'}
                        name={'unifiedmeeting'}
                        options={this.state.unifiedmeetingOptions}
                        selectedOptions = { this.state.newUser.unifiedmeeting}
                        handleChange={this.handleCheckRadio}
                        /> {/* Unified Meeting */}

                    <Radio  
                        title={'live Meeting'}
                        name={'livemeeting'}
                        options={this.state.livemeetingOptions}
                        selectedOptions = { this.state.newUser.livemeeting}
                        handleChange={this.handleCheckRadio}
                        /> {/* Live Meeting */}

                    <Radio  
                        title={'WebEx'}
                        name={'webex'}
                        options={this.state.webexOptions}
                        selectedOptions = { this.state.newUser.webex}
                        handleChange={this.handleCheckRadio}
                        /> {/* WebEx */}

                    <Radio  
                        title={'Adobe'}
                        name={'adobe'}
                        options={this.state.adobeOptions}
                        selectedOptions = { this.state.newUser.adobe}
                        handleChange={this.handleCheckRadio}
                        /> {/* Adobe */}

                    <Radio  
                        title={'Lotus Live'}
                        name={'lotuslive'}
                        options={this.state.lotusliveOptions}
                        selectedOptions = { this.state.newUser.lotuslive}
                        handleChange={this.handleCheckRadio}
                        /> {/* Lotus Live */}
            </div>
                  );
                }
              }

              export default WebProducts;