import "./App.css";
import Home from "./pages/Home";
import CoinPage from "./pages/CoinPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./common/settings";

function App() {
  const [trends , setTrends] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `${API_URL}/search/trending`
      );
      if(response.data.coins){
        setTrends(response.data.coins);
      }
    }
    fetchData();
  }, []);

  return (
    <Router>
       <Routes>
        {/* Define a single Route for both scenarios */}
        {console.log("trends :", trends )}
        <Route path="/:coinId" element={<CoinPage trends={trends} />} />
        <Route path="/" element={<Home trends={trends} />}  />
      </Routes>
    </Router>
  );
}

export default App;
