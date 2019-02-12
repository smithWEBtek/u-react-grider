import React from 'react';

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  }

  componentDidMount() {
                     // module load, cb function  
    window.gapi.load('client:auth2', () => {
                         // async network request to Google api server, to initialize our client
      window.gapi.client.init({
        clientId: '871500236810-6gfmkm66auh2g76f3oqpf5a8fr5svcvr.apps.googleusercontent.com',
        scope: 'email'
        // cb function (.then) to get notice that our network request completed
      }).then(() => {
        // get a reference to the 'auth' (this.auth) object after it is initialized
        // this.auth becomes available to any other function inside this class
        // use 'this.auth' to sign in, sign out and get user auth status, optionally setState w/result
        this.auth = window.gapi.auth2.getAuthInstance();

        // using 'this.auth' to setState w/result
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });

        // or just call this.onAuthChange() which also sets state
        // this.onAuthChange();

        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button 
          className="ui red google button"
          onClick={this.onSignOutClick}>

        <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button 
          className="ui red google button"
          onClick={this.onSignInClick}>

        <i className="google icon" />
          Sign In with Google
        </button>
      )
    }
  }

  render() {
    console.log("this.state: ", this.state);
    return (
      <div>
        Google Auth
        {this.renderAuthButton()}
      </div>
    );
  }
}

export default GoogleAuth;
