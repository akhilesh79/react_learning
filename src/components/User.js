import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.username + "constructor");
  }
  
  componentDidMount() {
    console.log(this.props.username + "componentdidmount");
  }

  render() {
    const { username, place } = this.props;
    console.log(this.props.username + "render");
    return (
      <div className="user-card">
        <h3>Username : {username}</h3>
        <h4>place : {place}</h4>
      </div>
    );
  }
}

export default User;
