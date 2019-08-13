import React, {Component} from 'react';
import Input from '../components/Input';
import Select from '../components/Select'; 

class CompanyInfo extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          newUser: {
            companynumber: '',
            creditcard: '',
            domainvalidation: '',
            specifydomain: '',
          },
          creditcardOptions: ['Yes', 'No'],
          domainvalidationOptions: ['Yes', 'No']
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleDomainValidation = this.handleDomainValidation.bind(this);
    }

    handleInput(e) {
      let value = e.target.value;
      let name = e.target.name;
      this.setState( prevState => ({ newUser : 
       {...prevState.newUser, [name]: value
       }
     }), () => console.log(this.state.newUser))
 }

 handleDomainValidation(e) {
  this.setState({ domainvalidation: e.target.value });
}

    render() {
        return (
            <div className = 'divSpacing'>
            <Input inputType={'text'}
                   title= {'Company Number'} 
                   name= {'companynumber'}
                   value={this.state.newUser.companynumber} 
                   placeholder = {'Company Number'}
                   handleChange = {this.handleInput}
                   /> {/* Company Number */}

            <Select title={'Credit Card Required'}
                  name={'creditcard'}
                  options = {this.state.creditcardOptions} 
                  value = {this.state.newUser.creditcard}
                  placeholder = {'Select Level'}
                  handleChange = {this.handleInput}
                  /> {/* Credit Card Selection */}

            <Select title={'Domain Validation Required'}
                  name={'domainvalidation'}
                  options = {this.state.domainvalidationOptions} 
                  value = {this.state.newUser.domainvalidation}
                  placeholder = {'Select Level'}
                  handleChange = {this.handleInput}
                  onChange = {this.handleValidationChange}
                  /> {/* Domain Validation Selection */}

            <Input inputType={'text'}
                   title= {'Specify Domain'} 
                   name= {'specifydomain'}
                   value={this.state.newUser.specifydomain} 
                   placeholder = {'If Yes, Please Specify Domain'}
                   handleChange = {this.handleInput}
                   disabled = {this.state.newUser.domainvalidation === 'No'}
                   /> {/* Specify Domain */}
            </div>
                  );
                }
              }
              
              export default CompanyInfo;