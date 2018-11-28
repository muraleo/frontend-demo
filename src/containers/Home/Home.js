import React, { Component } from "react";
import "./Home.scss";

class Home extends Component {
	render() {
		return <div className="Home">{this.props.data.toString}</div>;
	}
}

export default Home;
