import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    //load auth2    //callback means when finish loading auth2 run auth2.init
    // init return promise so can use then

    window.gapi.load("client:auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "536620892062-6jcg2eb46bb7h0hs69dklgrrjr13h0co.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          // when finsh auth2.init make variable and setState
          this.auth = window.gapi.auth2.getAuthInstance();
          // onAuthChange take true or false to call AC
          this.onAuthChange(this.auth.isSignedIn.get());
          // listen to changes in isSignedIn pass true of false to onAuthChange
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      //invoke AC pass userId
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      // invoke AC
      this.props.signOut();
    }
  };
  onSignInClick = () => {
    // google signIn
    this.auth.signIn();
  };
  onSignOutClick = () => {
    // google signOut
    this.auth.signOut();
  };
  renderSignIn() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red button ">
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red button">
          <i className="google icon"></i>
          Sign In with Google
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderSignIn()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
