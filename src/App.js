import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import HomePage from "./screens/Homescreen";
import BookingPage from "./componenets/CalendarView";
import { Container } from "react-bootstrap";
import AboutUs from "./componenets/AboutUs";
import Services from "./componenets/Services";
import Portfolio from "./componenets/Portfolio";
import PaintVisualizer from "./componenets/VirtualRoom";



function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/booking" element={<BookingPage/>}/>
            <Route path="/projects" element={<Portfolio/>}/>
            <Route path="/virtual" element={<PaintVisualizer/>}/>
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
