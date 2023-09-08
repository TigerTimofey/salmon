import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  setShowModal: false,
  showSuccess: false,
  isButtonCartVisible: false,

  addMenu: null,
  addMenuSalmonSet: null,
  addMenuHoso: null,
  addMenuPhila: null,
  addMenuRamen: null,
  addMenuFried: null,

  showMinus: false,
  showMinusSalmonSet: false,
  showMinusHoso: false,
  showMinusPhila: false,
  showMinusRamen: false,
  showMinusFried: false,
  selectedDate: new Date().toLocaleTimeString("en-US", { hour12: false }),

  // selectedOption: "",
};
export const setShowModal = createAction("setShowModal");
export const setShowSuccess = createAction("setShowSuccess");
export const setIsButtonCartVisible = createAction("setIsButtonCartVisible");
export const setAddMenu = createAction("setAddMenu");

export const setAddMenuSalmonSet = createAction("setAddMenuSalmonSet");
export const setAddMenuHoso = createAction("setAddMenuHoso");
export const setAddMenuPhila = createAction("setAddMenuPhila");
export const setAddMenuRamen = createAction("setAddMenuRamen");
export const setAddMenuFried = createAction("setAddMenuFried");

export const setShowMinus = createAction("setShowMinus");
export const setShowMinusSalmonSet = createAction("setShowMinusSalmonSet");
export const setShowMinusHoso = createAction("setShowMinusHoso");
export const setShowMinusPhila = createAction("setShowMinusPhila");
export const setShowMinusRamen = createAction("setShowMinusRamen");
export const setShowMinusFried = createAction("setShowMinusFried");
export const setSelectedDate = createAction("setSelectedDate");
// export const setSelectedOption = createAction("setSelectedOption");

const reducer = createReducer(initialState, {
  [setShowModal]: (state, action) => {
    state.showModal = action.payload;
  },
  [setShowSuccess]: (state, action) => {
    state.showSuccess = action.payload;
  },
  [setIsButtonCartVisible]: (state, action) => {
    state.isButtonCartVisible = action.payload;
  },
  [setAddMenu]: (state, action) => {
    state.addMenu = action.payload;
  },
  [setAddMenuSalmonSet]: (state, action) => {
    state.addMenuSalmonSet = action.payload;
  },
  [setAddMenuHoso]: (state, action) => {
    state.addMenuHoso = action.payload;
  },
  [setAddMenuPhila]: (state, action) => {
    state.addMenuPhila = action.payload;
  },
  [setAddMenuRamen]: (state, action) => {
    state.addMenuRamen = action.payload;
  },
  [setAddMenuFried]: (state, action) => {
    state.addMenuFried = action.payload;
  },

  [setShowMinus]: (state, action) => {
    state.showMinus = action.payload;
  },
  [setShowMinusSalmonSet]: (state, action) => {
    state.showMinusSalmonSet = action.payload;
  },
  [setShowMinusHoso]: (state, action) => {
    state.showMinusHoso = action.payload;
  },
  [setShowMinusPhila]: (state, action) => {
    state.showMinusPhila = action.payload;
  },
  [setShowMinusRamen]: (state, action) => {
    state.showMinusRamen = action.payload;
  },
  [setShowMinusFried]: (state, action) => {
    state.showMinusFried = action.payload;
  },
  // [setSelectedOption]: (state, action) => {
  //   state.selectedOption = action.payload;
  // },
  [setSelectedDate]: (state, action) => {
    state.selectedDate = action.payload;
  },
});

export const store = configureStore({ reducer });
