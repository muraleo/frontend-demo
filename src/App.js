import React, { Component } from "react";
import "./App.scss";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<nav>
						<ul>
							<li>
								<a href="/home">Home</a>
							</li>
							<li>
								<a href="/">Login</a>
							</li>
						</ul>
					</nav>
				</header>
			</div>
		);
	}
}

export default App;
