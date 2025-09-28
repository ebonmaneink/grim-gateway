import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Header/Header.jsx";
import NavBar from "../NavBar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import AppRoutes from "../../router/AppRouter.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
