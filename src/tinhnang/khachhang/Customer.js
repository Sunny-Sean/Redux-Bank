import { useSelector } from "react-redux";

function Customer() {
  // Tạo một dki tới store, store thay đổi => render lại thành phần nào đã dki tới store
  const customer = useSelector((store) => store.customer.fullName);

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
