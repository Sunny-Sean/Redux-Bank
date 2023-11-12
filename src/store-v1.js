import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "acc/gui":
      return { ...state, balance: state.balance + action.payload };
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
    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
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

// Bộ giảm tốc gốc
const rootReduce = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReduce);

// store.dispatch({ type: "acc/gui", payload: 500 });
// store.dispatch({ type: "acc/rut", payload: 300 });
// console.log(store.getState());
// store.dispatch({
//   type: "acc/ycvay",
//   payload: { amount: 1000, purpose: "Buy Cake" },
// });
// console.log(store.getState());

// store.dispatch({ type: "acc/trano" });
// console.log(store.getState());

function gui(tien) {
  return { type: "acc/gui", payload: tien };
}

function rut(tien) {
  return { type: "acc/rut", payload: tien };
}

function ycvay(tien, mucdich) {
  return {
    type: "acc/ycvay",
    payload: { amount: tien, purpose: mucdich },
  };
}

function trano() {
  return { type: "acc/trano" };
}

store.dispatch(gui(500));
store.dispatch(rut(200));
console.log(store.getState());

store.dispatch(ycvay(2000, "mua xe"));
console.log(store.getState());

store.dispatch(trano());
console.log(store.getState());

function taoKH(ten, idqg) {
  return {
    type: "cus/taoKH",
    payload: {
      fullName: ten,
      nationalID: idqg,
      createAt: new Date().toISOString(),
    },
  };
}

function capnhatTen(ten) {
  return {
    type: "cus/capnhatTen",
    payload: ten,
  };
}

store.dispatch(taoKH("sunny", 1234));
console.log(store.getState());
