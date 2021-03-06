import React, { Component } from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AddUserForm from '../users/addUserForm';
import { addUser } from '../../ducks/users';

class AdminPage extends Component {
	static propTypes = {};

	handleAddUser = newUser => this.props.addUser(newUser);

	render() {
		if (!this.props.user) return <Redirect to="auth/sign-in" />;
		return (
			<div>
				<NavLink to="/admin/user-managment" activeStyle={{ color: 'red' }}>
					Add User
				</NavLink>
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
	state => ({ user: state.auth.user }),
	{ addUser }
)(AdminPage);
