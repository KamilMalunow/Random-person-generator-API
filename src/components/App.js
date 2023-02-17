import ButtonFetchUsers from './ButtonFetchUsers';
import UsersList from './UsersList';
import './App.css';
import React from 'react';

const API = `https://randomuser.me/api/?results=1`;

class App extends React.Component {
  state = {
    users: []
  }

  handleDataFetch = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          console.log("Cos poszlo nie tak")
        }
      })
      .then(response => response.json())
      .then(data => {
        const user = data.results
        this.setState(prevState => ({
          users: prevState.users.concat(user)
        }))
      })
  }
  render() {
    return (
      <div className="App">
        <ButtonFetchUsers click={this.handleDataFetch} />
        <UsersList users={this.state.users} />
      </div>
    );
  }
}
export default App;
