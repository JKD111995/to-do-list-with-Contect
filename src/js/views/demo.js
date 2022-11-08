import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	
	const [textEntered, setTextEntered] = useState("");


	
	  
	function inputValue(e) {
			const itemValue = e.target.value;
			setTextEntered(itemValue);
			console.log(itemValue)
			
		  }

	const addNewTaskWrapper = (event) => {
			event.preventDefault();
			actions.addNewTask(textEntered)
			setTextEntered('');
		}

	return (
		<div className="container">
		
			<form  onSubmit={ addNewTaskWrapper}>
			 <input className="field"
            type="text"
            onChange={inputValue}
            value={textEntered}
          />
		  </form>
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
								<span>{item.title}</span>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.deleteTask(index)}>
								Delete Task
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
