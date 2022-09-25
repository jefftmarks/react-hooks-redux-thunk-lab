import React from "react";
import "./CatList.css";

function CatList({ catPics }) {

	const renderedCatPics = catPics.map((catPic) => (
		<img src={catPic.url} alt="cat" key={catPic.id} />
	))

	return (
		<div className="cat-container">
			{renderedCatPics}
		</div>
	)
}

export default CatList;