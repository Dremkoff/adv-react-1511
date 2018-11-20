import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import ErrorField from '../common/error-field';

class AddUserForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<Field name="email" label="Email:" component={ErrorField} />
				<Field name="firstName" label="First Name" component={ErrorField} />
				<Field name="lastName" label="Last Name" component={ErrorField} />
				<button>Add User</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'addUser',
})(AddUserForm);
