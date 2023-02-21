import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from "./componenets/Services";
import HomePage from "./screens/Homescreen";


function App() {
  return (
    <div>
      <Header/>
      <main className="py-3">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
          </Routes>
      </BrowserRouter>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
