import { ADD, REMOVE } from "./actions";
interface ToDo {
  items: { name: string; id: number }[];
}

const initialState: ToDo = {
  items: [],
};

const toDoReducer = (state = initialState, action: any): ToDo => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default toDoReducer;
