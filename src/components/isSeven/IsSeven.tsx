import React, { useMemo } from "react";

interface IsSevenProps {
	value: number;
}

const IsSeven: React.FC<IsSevenProps> = ({ value }) => {
	const checkNumber = () => {
		for (let i = 0; i < 6000000; i++) {
			i++;
		}
		return value === 7 ? "Жетиге барабар" : "Жетиге барабар эмес";
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const result = useMemo(() => checkNumber(), [value]);

	return <div>{result}</div>;
};

export default IsSeven;
