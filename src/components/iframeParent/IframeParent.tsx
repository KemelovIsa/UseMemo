/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../layout/header/Header";
import styled from "styled-components";
import Footer from "../layout/footer/Footer";
import {
	handleClick,
	setInputValue1,
	setInputValue2,
	fetchTodos,
	addTodo,
	deleteTodo,
} from "../../redux/tools/todoSlice";

interface Result {
	_id: number;
	value1: string;
	value2: string;
}

interface RootState {
	todos: {
		count3: number;
		inputValue1: string;
		inputValue2: string;
		results: Result[];
	};
}

const Conteiner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	.btn {
		font-size: 17px;
		background: transparent;
		border: none;
		padding: 1em 1.5em;
		color: #c3ff00;
		text-transform: uppercase;
		position: relative;
		transition: 0.5s ease;
		cursor: pointer;
		margin-bottom: 15px;
	}

	.btn::before {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		height: 2px;
		width: 0;
		background-color: #ffc506;
		transition: 0.5s ease;
	}

	.btn:hover {
		color: #1e1e2b;
		transition-delay: 0.5s;
	}

	.btn:hover::before {
		width: 100%;
	}

	.btn::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		height: 0;
		width: 100%;
		background-color: #ffc506;
		transition: 0.4s ease;
		border-radius: 25px;
		z-index: -1;
	}

	.btn:hover::after {
		height: 100%;
		transition-delay: 0.4s;
		color: aliceblue;
	}

	input {
		padding: 10px;
		border: 2px solid #3498db;
		border-radius: 25px;
		margin-bottom: 10px;
		width: 200px;
		font-size: 16px;
	}
	button {
		padding: 10px 20px;
		width: 200px;
		background-color: rgba(0, 0, 0, 0.545);
		color: #fff;
		border: none;
		border-radius: 25px;
		font-size: 18px;
		cursor: pointer;
		transition: background-color 0.3s ease;
		margin-bottom: 15px;
	}
`;

const Six = styled.div`
	max-width: 200px;
	max-height: 1200px;
	min-height: 200px;
	border-radius: 30px;
	background-color: #ffff0088;
	img {
		width: 100px;
		height: 100px;
	}
`;

interface ResultItemProps extends Result {
	onDelete: (_id: number) => void;
}

const ResultItem: React.FC<ResultItemProps> = React.memo(
	({ _id, value1, value2, onDelete }) => {
		console.log(`Rendering ResultItem ${_id}`);
		return (
			<div>
				<p>{value1}</p>
				<img src={value2} alt="result-img" />
				<button onClick={() => onDelete(_id)}>Delete</button>
			</div>
		);
	}
);

const IframeParent: React.FC = () => {
	const dispatch = useDispatch();
	const count3 = useSelector((state: RootState) => state.todos.count3);
	const inputValue1 = useSelector(
		(state: RootState) => state.todos.inputValue1
	);
	const inputValue2 = useSelector(
		(state: RootState) => state.todos.inputValue2
	);
	const results = useSelector((state: RootState) => state.todos.results);
	const iframeRef = useRef<HTMLIFrameElement | null>(null);

	const handleClickLocal = useCallback(() => {
		dispatch(handleClick());
	}, [dispatch]);

	const sendMessage = useCallback(async () => {
		if (!iframeRef.current) return;

		const message = { value1: inputValue1, value2: inputValue2 };

		try {
			dispatch<any>(addTodo(message));

			iframeRef.current.contentWindow?.postMessage(
				message,
				"http://localhost:5173/IframeChild"
			);
		} catch (error) {
			console.error("Error during POST request or dispatch:", error);
		}
	}, [inputValue1, inputValue2, dispatch]);

	const handleAdd = useCallback(() => {
		console.log("Added:", inputValue1, inputValue2);
		dispatch<any>(addTodo({ value1: inputValue1, value2: inputValue2 }));
	}, [inputValue1, inputValue2, dispatch]);

	const handleDelete = useCallback(
		(_id: number) => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			dispatch<any>(deleteTodo(_id));
		},
		[dispatch]
	);

	const handleMessageFromIframe = useCallback(
		(event: MessageEvent) => {
			const data = event.data;
			console.log("Message from iframe:", data);
			handleAdd();
		},
		[handleAdd]
	);

	useEffect(() => {
		window.addEventListener("message", handleMessageFromIframe);
		return () => {
			window.removeEventListener("message", handleMessageFromIframe);
		};
	}, [handleMessageFromIframe]);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		dispatch<any>(fetchTodos());
	}, [dispatch]);

	const memoizedResults = useMemo(() => results, [results]);

	return (
		<>
			<Header />
			<Conteiner>
				<button className="btn" onClick={handleClickLocal}>
					{count3}
				</button>

				<input
					type="text"
					placeholder="NAME"
					value={inputValue1}
					onChange={(e) => dispatch(setInputValue1(e.target.value))}
				/>
				<input
					type="text"
					placeholder="IMAGE URL"
					value={inputValue2}
					onChange={(e) => dispatch(setInputValue2(e.target.value))}
				/>
				<button onClick={() => sendMessage()}>Add</button>
				<iframe
					ref={iframeRef}
					src="/IframeChild"
					width="200"
					height="220"
					title="IframeChild"></iframe>
				<Six>
					{memoizedResults.map((result: Result) => (
						<ResultItem
							key={result._id}
							_id={result._id}
							value1={result.value1}
							value2={result.value2}
							onDelete={handleDelete}
						/>
					))}
				</Six>
			</Conteiner>
			<Footer />
		</>
	);
};

export default IframeParent;
