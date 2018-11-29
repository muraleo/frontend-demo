import React from "react";
import "./filmCard.scss";

const filmCard = props => {
	return (
		<div className="FilmCard">
			<img src={props.imgSrc} alt={props.title} />
			<p>{props.title}</p>
		</div>
	);
};

export default filmCard;
