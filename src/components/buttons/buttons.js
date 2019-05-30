import React from 'react';

import './buttons.css';

function Buttons(props) {
	return(
    <div className="buttons">
		{props.buttons.map((element, key) => {
			return (
				<button 
					key={key}
					className={`btn ${props.activeButton === element ? 'active' : null}`}
					onClick={() => {
							props.onClickButton(element)
					}}
				>
					{element}
				</button>
			)
		})}
  	</div>
  );
}

export default Buttons