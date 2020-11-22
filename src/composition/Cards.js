import React from 'react';
import ReactDOM from 'react-dom';
import './Card.css';

function Cards(props) {
	return (
	<div className='Cards'>
	<button type='button'>delete</button>
		<h3>{props.title}</h3>
		<p>{props.content}</p>
		
	</div>
);
}

export default Cards;