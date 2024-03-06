import React from "react";

interface CountProps {
	id: string;
	value: number;
}

const Count: React.FC<CountProps> = ({ id, value }) => {
	console.log(`count ${id} is rendering`);
	return <div id={id}>{value}</div>;
};

export default Count;
