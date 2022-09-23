import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div>
			<h1>404</h1>
			<div>
				<Link to={"/"}>Home</Link>
			</div>
			<div>
				<Link to={"/adda"}>Adda</Link>
			</div>
		</div>
	);
};

export default PageNotFound;
