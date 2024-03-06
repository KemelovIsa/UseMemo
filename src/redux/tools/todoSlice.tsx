/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Result, TodoState } from "../types";

type AsyncResult = Result[];

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const response = await axios.get<Result[]>(
      "https://api.elchocrud.pro/api/v1/00a20afb867497f94f1636648bf8bfab/useMemo"
    );
    return response.data as AsyncResult;
  } catch (error) {
    throw error;
  }
});

export const addTodo = createAsyncThunk("todos/addTodo", async (newTodo: { value1: string; value2: string }) => {
  try {
    const response = await axios.post<Result[]>(
      "https://api.elchocrud.pro/api/v1/00a20afb867497f94f1636648bf8bfab/useMemo",
      newTodo
    );
    return response.data as AsyncResult;
  } catch (error) {
    throw error;
  }
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (_id: number) => {
  try {
    const response = await axios.delete<Result[]>(
      `https://api.elchocrud.pro/api/v1/00a20afb867497f94f1636648bf8bfab/useMemo/${_id}`
    );
    return response.data as AsyncResult;
  } catch (error) {
    throw error;
  }
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    count3: 0,
    inputValue1: "",
    inputValue2: "",
    results: [],
  } as TodoState,
  reducers: {
    handleClick: (state) => {
      state.count3 += 1;
    },
    setInputValue1: (state, action: PayloadAction<string>) => {
      state.inputValue1 = action.payload;
    },
    setInputValue2: (state, action: PayloadAction<string>) => {
      state.inputValue2 = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (_state) => {
        // Обработка ожидания для fetchTodos
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        // Обработка успешного выполнения для fetchTodos
        state.results = action.payload;
      })
      .addCase(fetchTodos.rejected, (_state, _action) => {
        // Обработка неудачного выполнения для fetchTodos
      })

      .addCase(addTodo.pending, (_state) => {
        // Обработка ожидания для addTodo
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        // Обработка успешного выполнения для addTodo
        state.results = action.payload;
      })
      .addCase(addTodo.rejected, (_state, _action) => {
        // Обработка неудачного выполнения для addTodo
      })

      .addCase(deleteTodo.pending, (_state) => {
        // Обработка ожидания для deleteTodo
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        // Обработка успешного выполнения для deleteTodo
        state.results = action.payload;
      })
      .addCase(deleteTodo.rejected, (_state, _action) => {
        // Обработка неудачного выполнения для deleteTodo
      });
  },
});

export const { handleClick, setInputValue1, setInputValue2 } = todoSlice.actions;

export default todoSlice.reducer;