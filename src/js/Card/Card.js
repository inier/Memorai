import React, {useState} from "react";
import Image from "../Image";

export default function Card({imageURL, isFlipped}) {
	const [flipped, setFlipped] = useState(false);

	return <div className="card-container" onClick={() => setFlipped(!flipped)}>
		<div className={"card" + (flipped ? " flipped" : "")}>
			<Image className="side front" src={imageURL}/>
			<div className="side back"/>
		</div>
	</div>;
}