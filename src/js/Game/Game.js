import React, {useState} from "react";
import uuid from "uuid";
import cardImages from "../../cards";
import Card from "../Card/Card";
import deepcopy from "deepcopy";

function shuffleArray(array) {
	return array.sort(() => .5 - Math.random());
}

function generateCards(count) {
	if (count % 2 !== 0)
		throw "Count must be even: 2, 4, 6, etc. but it is " + count;

	const cards = shuffleArray(cardImages)
		.slice(0, count / 2)
		.map(imageURL => ({
			id: uuid.v4(),
			imageURL: "/static/images/cards/" + imageURL,
			isFlipped: false
		}))
		.flatMap(e => [e, deepcopy(e)]);

	return shuffleArray(cards);
}

export default function Game({fieldWidth=6, fieldHeight=3}) {
	const totalCards = fieldWidth * fieldHeight;

	const [cards, setCards] = useState(generateCards(totalCards));

	return <div className="game container-md">
		<div className="cards-container">
			{cards.map(card => <Card key={card.id} {...card}/>)}
		</div>
	</div>;
}