import Navbar from "./Navbar.js"
import Footer from "./Footer"
import MainContent from "./MainContent"
import { Container } from "@mui/system";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Container>
      <MainContent></MainContent>
    </Container>
    <Footer></Footer>
    </>
  );
}

export default App;
