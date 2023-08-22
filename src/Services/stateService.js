import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  setShowModal: false,
  isButtonCartVisible: false,
};
export const setShowModal = createAction("setShowModal");
export const setIsButtonCartVisible = createAction("setIsButtonCartVisible");

const reducer = createReducer(initialState, {
  [setShowModal]: (state, action) => {
    state.showModal = action.payload;
  },
  [setIsButtonCartVisible]: (state, action) => {
    state.isButtonCartVisible = action.payload;
  },
});

export const store = configureStore({ reducer });
