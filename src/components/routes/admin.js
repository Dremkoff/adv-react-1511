import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AddUserForm from '../users/addUserForm';
import { addUser } from '../../ducks/users';

class AdminPage extends Component {
	static propTypes = {};

	handleAddUser = newUser => this.props.addUser(newUser);

	render() {
		return (
			<div>
				<h1>Admin page</h1>
				<Route
					path="/admin/user-managment"
					render={() => <AddUserForm onSubmit={this.handleAddUser} />}
				/>
			</div>
		);
	}
}

export default connect(
	null,
	{ addUser }
)(AdminPage);
