import React from "react";

const Footer = (props) => {
	return (
		<footer className="page-footer font-small text-white bg-dark pt-4">
			<div className="footer-copyright text-center py-3">
				{props.content}
			</div>
		</footer>
	);
};

export { Footer };