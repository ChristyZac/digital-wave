import Layout from "./components/layout.jsx";
import About from "./pages/about/About.jsx";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Service from "./pages/service/Service.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";


function App() {

  return (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </Layout>
    </Router>
);
}

export default App


// conditional rendering 53:01