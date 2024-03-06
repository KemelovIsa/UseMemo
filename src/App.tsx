import { FC } from "react";
import IframeChild from "./components/iframeChild/IframeChild";
import IframeParent from "./components/iframeParent/IframeParent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<IframeParent />} />
					<Route path="/IframeChild" element={<IframeChild />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
