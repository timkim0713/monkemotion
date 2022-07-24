import Navbar from "./Navbar.js"
import Footer from "./Footer"
import MainContent from "./MainContent"
import { Container } from "@mui/system";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home"
import Contribute from "./pages/Contribute"
import Research from "./pages/Research"
import About from "./pages/About"


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container sx={{ mt: 10, mb: 10 }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="research" element={<Research />} />
          <Route path="contribute" element={<Contribute />} />
          <Route path="about" element={<About />} />

        </Routes>


      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
