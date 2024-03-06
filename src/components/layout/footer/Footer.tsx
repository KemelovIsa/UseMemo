import React from "react";
import styled from "styled-components";

const Footers = styled.footer`
	background-color: #1b1b1b;
	color: white;
	width: 100%;
	height: 80px;
	margin-top: 205px;
	border-radius: 20px;

	div {
		display: flex;
	}

	h4 {
		margin-left: 330px;
		--glow-color: rgb(176, 252, 255);
		--glow-spread-color: rgba(123, 251, 255, 0.781);
		--enhanced-glow-color: rgb(206, 255, 255);
		--btn-color: rgb(61, 127, 136);
		border: 0.25em solid var(--glow-color);
		padding: 1em 3em;
		color: black;
		font-size: 15px;
		font-weight: bold;
		border-radius: 20px;
		background-color: var(--btn-color);
		outline: none;
		box-shadow: 0 0 1em 0.25em var(--glow-color),
			0 0 4em 1em var(--glow-spread-color),
			inset 0 0 0.75em 0.25em var(--glow-color);
		text-shadow: 0 0 0.5em var(--glow-color);
		position: relative;
		transition: all 0.3s;
	}

	h4::after {
		pointer-events: none;
		content: "";
		height: 100%;
		width: 100%;
		background-color: var(--glow-spread-color);
		filter: blur(2em);
		opacity: 0.7;
		transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
	}

	h4:hover {
		color: var(--btn-color);
		background-color: var(--glow-color);
		box-shadow: 0 0 1em 0.25em var(--glow-color),
			0 0 4em 2em var(--glow-spread-color),
			inset 0 0 0.75em 0.25em var(--glow-color);
	}

	h4:active {
		box-shadow: 0 0 0.6em 0.25em var(--glow-color),
			0 0 2.5em 2em var(--glow-spread-color),
			inset 0 0 0.5em 0.25em var(--glow-color);
	}
`;

const Footer: React.FC = () => {
	return (
		<Footers>
			<div>
				<h4>USE MEMO</h4>
				<h4>USE CALLBACK</h4>
				<h4>REACT MEMO</h4>
			</div>
		</Footers>
	);
};

export default Footer;
