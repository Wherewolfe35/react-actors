import React, { Component } from 'react';

class Contact extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <h2>Contact</h2>
        <input placeholder="First Name" /><input placeholder="Last Name" /><input placeholder="Best Impression"/><button>Join Us</button>
        <p>Phone Number: 888-867-5309</p>
        <p>E-mail: Reactors@Rereact.us</p>
      </div>
     );
  }
}
 
export default Contact;