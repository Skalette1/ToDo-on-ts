
import { createStore } from "@reduxjs/toolkit"
import toDoReducer from "./reducer"
export const store = createStore(toDoReducer)