import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import Reservation from "./components/pages/BookingPage";
import Confirmation from "./components/pages/Confirmation";
import Homepage from "./components/pages/HomePage";
import Login from "./components/pages/Login";
import Order from "./components/pages/Order";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<About />} />

      <Route path="/reservations" element={<Reservation />} />

      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />

      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
};

export default App;
