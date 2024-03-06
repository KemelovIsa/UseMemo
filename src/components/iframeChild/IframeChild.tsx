import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Two = styled.div`
	background-color: aqua;
	color: black;
	img {
		width: 150px;
		height: 130px;
	}
`;

const IframeChild: React.FC = () => {
	const [receivedMessage, setReceivedMessage] = useState<string>("");
	const [receivedMessage2, setReceivedMessage2] = useState<string>("");

	useEffect(() => {
		window.addEventListener("message", function (e: MessageEvent) {
			if (e.origin !== "http://localhost:5173") return;
			setReceivedMessage(e.data.value1);
			setReceivedMessage2(e.data.value2);
		});

		return () => {
			window.removeEventListener("message", () => {});
		};
	}, []);

	return (
		<Two>
			<p>{receivedMessage}</p>
			<img src={receivedMessage2} alt="LAST PHOTO" />
		</Two>
	);
};

export default IframeChild;
