import React, { Component } from "react";
import "./Home.scss";

import FilmCard from "../../components/filmCard/filmCard";

class Home extends Component {
	render() {
		const filmcards = this.props.data.map(film => {
			// console.log(film.title.split(":")[1]);
			return (
				<FilmCard
					key={film.id}
					title={film.title.split(":")[1]}
					imgSrc={film.images.image[0].src}
				/>
			);
		});
		return <div className="Home">{filmcards}</div>;
	}
}

export default Home;
