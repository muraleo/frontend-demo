import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
	state = {
		email: "",
		password: "",
		loading: false,
		errorMessage: "",
		emailValid: false,
		passwordValid: false
	};

	inputChangeHandler = event => {
		// console.log(event.target.value);
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	loginHandler = event => {
		event.preventDefault();
		// console.log(this.props.history);
		this.checkValidation();
	};

	componentDidUpdate() {
		if (this.state.emailValid && this.state.passwordValid) {
			this.props.loginSuccess(this.props.history);
		}
	}

	checkValidation = () => {
		const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,32}$/;
		let pwd = this.state.password;
		let newErrorMessage = "";
		let newEmailValid = false;
		let newPasswordValid = false;

		if (!passwordPattern.test(pwd)) {
			newErrorMessage = `Password should at least contain one lowercase character, 
							   one uppercase character and one digits number. The length
							   of password should between 6 and 32.`;
		} else {
			newPasswordValid = true;
		}

		const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		if (!emailPattern.test(this.state.email)) {
			newErrorMessage = "Invalid Email Address!";
		} else {
			newEmailValid = true;
		}

		this.setState({
			...this.state,
			errorMessage: newErrorMessage,
			emailValid: newEmailValid,
			passwordValid: newPasswordValid
		});
	};

	render() {
		let login_bottom = this.props.loading ? (
			<p>Loading</p>
		) : (
			<p>{this.state.errorMessage}</p>
		);
		return (
			<div className="Login">
				<div className="login_wrapper">
					<input
						id="email"
						type="text"
						placeholder="Email"
						value={this.state.email}
						onChange={event => this.inputChangeHandler(event)}
					/>
				</div>
				<div className="login_wrapper">
					<input
						id="password"
						type="password"
						placeholder="Password"
						value={this.state.password}
						onChange={event => this.inputChangeHandler(event)}
					/>
				</div>
				<div className="login_wrapper">
					<button
						type="button"
						onClick={event => this.loginHandler(event)}
					>
						LOG IN
					</button>
				</div>
				<div className="login_wrapper">{login_bottom}</div>
			</div>
		);
	}
}

export default Login;
