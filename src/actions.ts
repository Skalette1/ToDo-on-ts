export const ADD = "ADD";
export const REMOVE = "REMOVE";

export const add = (list: { name: string; id: number }) => ({
  type: ADD,
  payload: list,
});

export const remove = (id: number) => ({
  type: REMOVE,
  payload: id,
});
