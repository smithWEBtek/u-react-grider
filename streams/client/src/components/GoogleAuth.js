import React from 'react';

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  }


  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '871500236810-6gfmkm66auh2g76f3oqpf5a8fr5svcvr.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  onSignIn = (e) => {
    e.preventDefault()
    this.auth.signIn()
  }

  onSignOut = (e) => {
    e.preventDefault()

    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      this.onSignOut(e)
      return (
        <button className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      this.onSignIn(e)
      return (
        <button className="ui red google button">
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
