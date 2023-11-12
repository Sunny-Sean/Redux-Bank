import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "acc",
  initialState,
  reducers: {
    gui(state, action) {
      state.balance = state.balance + action.payload;
      state.isLoading = false;
    },
    rut(state, action) {
      state.balance = state.balance - action.payload;
    },
    ycvay: {
      // Thực hiện khi nhận về từ 2 đối số trở lên
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    trano(state) {
      state.balance = state.balance - state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    dangtai(state) {
      state.isLoading = true;
    },
  },
});

export function gui(tien, loaitien) {
  if (loaitien === "USD") return { type: "acc/gui", payload: tien };
  return async function (dispatch, getState) {
    dispatch({ type: "acc/dangtai" });
    // Gọi api
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${tien}&from=${loaitien}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: "acc/gui", payload: converted });
  };
}

export const { rut, ycvay, trano } = accountSlice.actions;

export default accountSlice.reducer;

/*
export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "acc/gui":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "acc/rut":
      return { ...state, balance: state.balance - action.payload };
    case "acc/ycvay":
      if (state.loan > 0) return state;
      // Later
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "acc/trano":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case "acc/dangtai":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}

export function rut(tien) {
  return { type: "acc/rut", payload: tien };
}

export function ycvay(tien, mucdich) {
  return {
    type: "acc/ycvay",
    payload: { amount: tien, purpose: mucdich },
  };
}

export function trano() {
  return { type: "acc/trano" };
}
*/
