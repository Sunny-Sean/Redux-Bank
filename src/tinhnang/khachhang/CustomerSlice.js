import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createAt: "",
};

const customerSlice = createSlice({
  name: "cus",
  initialState,
  reducers: {
    taoKH: {
      prepare(fullName, nationalID) {
        return {
          payload: { fullName, nationalID, createAt: new Date().toISOString },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createAt = action.payload.createAt;
      },
    },
    capnhatTen(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { taoKH, capnhatTen } = customerSlice.actions;
export default customerSlice.reducer;

/*
export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case "cus/taoKH":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createAt: action.payload.createAt,
      };
    case "cus/capnhatTen":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}
export function taoKH(ten, idqg) {
  return {
    type: "cus/taoKH",
    payload: {
      fullName: ten,
      nationalID: idqg,
      createAt: new Date().toISOString(),
    },
  };
}

export function capnhatTen(ten) {
  return {
    type: "cus/capnhatTen",
    payload: ten,
  };
} */
