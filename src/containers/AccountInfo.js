import React, {Component} from 'react';
import Input from '../components/Input';
import Select from '../components/Select'; 

class AccountInfo extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          newUser: {
            accountnumber: '',
            setup: '',
          },
          setupOptions: ['Manuel', 'Automated'],
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
    this.setState( prevState => ({ newUser : 
         {...prevState.newUser, [name]: value
         }
       }), () => console.log(this.state.newUser))
   }

    render() {
        return (
            <div className = 'divSpacing'>
                <Input inputType={'text'}
                   title= {'Account Number'} 
                   name= {'accountnumber'}
                   value={this.state.newUser.accountnumber} 
                   placeholder = {'Account Number'}
                   handleChange = {this.handleInput}
                   /> {/* Account Number */}

                <Select title={'Manuel or Automated Setup'}
                  name={'setup'}
                  options = {this.state.setupOptions} 
                  value = {this.state.newUser.setup}
                  placeholder = {'Select Level'}
                  handleChange = {this.handleInput}
                  /> {/* Setup Selection */}
            </div>
                  );
                }
              }
              
              export default AccountInfo;