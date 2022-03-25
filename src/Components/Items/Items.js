import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import "./Items.css";
const Items = (props) => {
	let items = props.data;
	console.log(items);

	return (
		<div className="items">
			{items.map((item) => (
				<Item data={item} key={item.id}></Item>
			))}
		</div>
	);
};
function Item(props) {
	let item = props.data;
	const { name, url, id, price } = item;
	return (
		<div className="item">
			<img className="image" src={url} alt="" />
			<h2>{name}</h2>
			<h4>Price: {price} tk.</h4>
			<button>
				<span>Add to cart</span>
				<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
			</button>
		</div>
	);
}
export default Items;
