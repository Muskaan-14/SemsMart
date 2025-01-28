import Login from "./pages/Login";
import Profile from "./pages/Profile";
import MyOrders from "./pages/MyOrders";

import "./App.css";
// import  Route  from "react-router";
import { BrowserRouter, Routes, Route} from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/myorders" element={<MyOrders/>}></Route>
        {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
