import { useSelector } from "react-redux";
import CreateCustomer from "./tinhnang/khachhang/CreateCustomer";
import Customer from "./tinhnang/khachhang/Customer";
import AccountOperations from "./tinhnang/taikhoan/AccountOperations";
import BalanceDisplay from "./tinhnang/taikhoan/BalanceDisplay";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
