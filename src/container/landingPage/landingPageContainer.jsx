import React, {Component} from "react";
import './landingPage.css';
import _ from 'lodash';
import fire from '../../fire';
import { Redirect } from 'react-router';
import { createHashHistory } from 'history'
import firebase, { auth, provider } from '../../fire.js';


const history = createHashHistory();
export default class Landing extends Component {

  constructor(props) {
    super(props);
     this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null // <-- add this line
    }

    this.login = this.login.bind(this); // <-- add this line
  this.logout = this.logout.bind(this); // <-- add this line

  }

  login() {
  auth.signInWithPopup(provider)
    .then((result) => {
  // history.push('/token');
      const user = result.user;
      this.setState({
        user
      });
    });
}
logout() {
  auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
}

  render() {

     return (

        <div className="wrapper">
  <h1>Fun Food Friends</h1>
  {this.state.user ?
    <button onClick={this.logout}>Log Out</button>
    :
    <button onClick={this.login}>Log In</button>
  }
</div>

     );
  }
}
