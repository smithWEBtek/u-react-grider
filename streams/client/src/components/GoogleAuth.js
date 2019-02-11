import React from 'react';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '871500236810-6gfmkm66auh2g76f3oqpf5a8fr5svcvr.apps.googleusercontent.com',
        scope: 'email'
      })
    });
  }

  render() {
    return (
      <div>
        Google Auth
      </div>
    );
  }
}

export default GoogleAuth;
