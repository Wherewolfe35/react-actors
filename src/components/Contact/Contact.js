import React, { Component } from 'react';

class Contact extends Component {
  state = {  }

  handleChange = (name) => {
    const fName = name.target.value;
    return fName;
  }

  render() { 
    return ( 
      <div>
        <h2>Contact</h2>
        <input placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/><input placeholder="Last Name" /><input placeholder="Best Impression"/><button>Join Us</button>
        {fName && (
          <p>fName.value</p>
        )}
        <p>Phone Number: 888-867-5309</p>
        <p>E-mail: Reactors@Rereact.us</p>
      </div>
     );
  }
}
 
export default Contact;