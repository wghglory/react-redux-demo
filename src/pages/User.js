import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import { store } from '../store';
import { updateUser, getUsers, fillUsers, getUsersAsync } from '../actions';

class User extends Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
  }

  changeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  componentDidMount() {
    setTimeout(() => {
      store.dispatch(getUsers()); //no then callback
      // we want to dispatch getUsers action and call API, update state by reducer
    }, 1000);

    // this.getAllUsers();

    this.props.getAllUsersAsync();
  }

  getAllUsers() {
    // thought 1 of Invert Control: click button --> dispatch async action --> fetch API --> updateState by reducer

    // thought 2: click button --> fetch API --> call back dispatch sync action --> updateState by reducer
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      store.dispatch(fillUsers(res.data));

      // const a = store.getState();
      // console.log(a);

      // better use thought 2 mapDispatchToProps since store no needs to be imported
    });
  }

  render() {
    const { dispatch, state, editUser, getAllUsersAsync } = this.props;

    return (
      <div>
        <ul>
          {state &&
            state.map(item => (
              <li key={item.id} className="list">
                <span>{item.id}</span>
                <span>{item.name}</span>
                <span>{item.email}</span>
              </li>
            ))}
        </ul>
        <input value={this.state.username} onChange={this.changeUsername} />
        <button onClick={() => editUser({ id: 1, name: this.state.username })}>
          Edit User ID 1
        </button>

        <div>
          <p>If you edit user 1 and click this, notice the user list will recover.</p>
          <button onClick={getAllUsersAsync}>Refresh Users</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return {
    editUser: payload => {
      dispatch(updateUser(payload));
    },

    // thought 1 of Invert Control: click button --> dispatch async action --> fetch API --> updateState by reducer
    getAllUsersAsync: () => {
      dispatch(getUsersAsync());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
