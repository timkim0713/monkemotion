import Navbar from "./Navbar.js"
import Footer from "./Footer"
import MainContent from "./MainContent"
import { Container } from "@mui/system";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from "./pages/Home"
import Contribute from "./pages/Contribute"
import Research from "./pages/Research"
import About from "./pages/About"
import theme from "./theme"


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>

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
      </ThemeProvider>
    </>
  );
}

export default App;
