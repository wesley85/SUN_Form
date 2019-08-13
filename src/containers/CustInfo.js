import React, {Component} from 'react';
import Input from '../components/Input';
import Select from '../components/Select'; 
import CompanyInfo from './CompanyInfo';
import AccountInfo from './AccountInfo';

class CustInfo extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          newUser: {
            name: '',
            email: '',
            linklevel: '',
          },
          linklevelOptions: ['Company', 'Account']
        }
        this.handleFullName = this.handleFullName.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleFullName(e) {
      let value = e.target.value;
      this.setState( prevState => ({ newUser : 
           {...prevState.newUser, name: value
           }
         }), () => console.log(this.state.newUser))
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
                   title= {'Full Name'} 
                   name= {'name'}
                   value={this.state.newUser.name} 
                   placeholder = {'Enter Your name'}
                   handleChange = {this.handleInput}
                   />

                <Input inputType={'text'}
                   title= {'Email'} 
                   name= {'email'}
                   value={this.state.newUser.email} 
                   placeholder = {'Enter Your Email'}
                   handleChange = {this.handleInput}
                   />

                <Select title={'Link Level'}
                  name={'linklevel'}
                  options = {this.state.linklevelOptions} 
                  value = {this.state.newUser.linklevel}
                  placeholder = {'Select Level'}
                  handleChange = {this.handleInput}
                  />

                  {
          this.state.newUser.linklevel === 'Company' ?
            <div style={{ marginTop: '50px' }}>
            <CompanyInfo />
            </div>
          : null
        }
{/**** Seperating show Company options and Account options ****/}
        {
          this.state.newUser.linklevel === 'Account' ?
            <div style={{ marginTop: '50px' }}>
            <AccountInfo />
            </div>
          : null
        }
            </div>
                  );
                }
              }
              
              export default CustInfo;