import Header from "./Page/Home/Header/Header";
import About from "./Page/About/About";
import Dashbord from "./Page/Dashbord/Dashbord";
import Login from "./Page/Shared/Login/Login";
import Home from "./Page/Home/Home/Home";
import Details from "./Page/Details/Details";
import "./App.css";
import Authprovider from "./Context/Authprovider";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Authprovider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashbord" element={<Dashbord />} />
          <Route path="login" element={<Login />} />
          <Route path="details:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;
