import { PayloadAction, createAction } from "@reduxjs/toolkit";

export interface Result {
	_id: number |string;
	value1: number |string;
	value2: number |string;
}

export interface TodoState {
	count3: number  ;
	inputValue1: number |string;
	inputValue2: number |string;
	results: Result[];
}

export interface ExtraReducersBuilder {
	addCase: (
		actionCreator: string | number |null| ReturnType<typeof createAction>,
		callback: (state: TodoState, action: PayloadAction<unknown>) => void
	) => ExtraReducersBuilder;
}
