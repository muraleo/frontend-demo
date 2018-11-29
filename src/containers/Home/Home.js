import React, { Component } from "react";
import "./Home.scss";

import FilmCard from "../../components/filmCard/filmCard";
import Spinner from "../../components/spinner/spinner";

class Home extends Component {
	render() {
		const filmcards = this.props.data.map(film => {
			// console.log(film.title.split(":")[1]);
			return (
				<FilmCard
					key={film.id}
					title={
						film.title.indexOf(":") !== -1
							? film.title.split(":")[1]
								? film.title.split(":")[1]
								: "NO TITLE"
							: film.title
					}
					imgSrc={film.images.image[0].src}
				/>
			);
		});

		const spinr = this.props.loading ? <Spinner /> : null;
		return (
			<div className="Home">
				{filmcards}
				{spinr}
			</div>
		);
	}
}

export default Home;
