import React, { Component } from "react";
import "./App.scss";
import axios from "axios";

import Login from "./containers/Login/Login";
import Home from "./containers/Home/Home";

import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Link,
	Switch
} from "react-router-dom";

class App extends Component {
	state = {
		isAuthenticated: false,
		movieData: [],
		loading: true
	};

	changeAuthenticatedHandler = history => {
		this.setState({
			...this.state,
			isAuthenticated: true
		});
		// console.log(history);
		// alert("push");
		history.push("/");
	};

	componentDidUpdate() {
		if (this.state.isAuthenticated && this.state.movieData.length === 0) {
			axios
				.get("http://www.snagfilms.com/apis/films.json?limit=10")
				.then(data => {
					// console.log(data.data.films.film);
					this.setState({
						...this.state,
						movieData: data.data.films.film,
						loading: false
					});
				})
				.catch(function(error) {
					console.log(error);
				});
		}
	}

	render() {
		let home_link = null;
		let redirect_login = null;
		if (this.state.isAuthenticated) {
			home_link = <Link to="/">Home</Link>;
			redirect_login = null;
		} else {
			home_link = (
				<Link
					to="/login"
					onClick={() => {
						alert("You need login first.");
					}}
				>
					Home
				</Link>
			);
			redirect_login = <Redirect to="/login" />;
		}

		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<nav>
							<ul>
								<li>{home_link}</li>
								<li>
									<Link to="/login">Login</Link>
								</li>
							</ul>
						</nav>
					</header>

					{redirect_login}
					<Switch>
						<Route
							path="/login"
							exact
							render={props => (
								<Login
									{...props}
									loginSuccess={
										this.changeAuthenticatedHandler
									}
								/>
							)}
						/>
						<Route
							path="/"
							exact
							render={props => (
								<Home
									{...props}
									data={this.state.movieData}
									loading={this.state.loading}
								/>
							)}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
