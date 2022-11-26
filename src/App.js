import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import './style.scss';
import { useContext } from "react";
import { AuthContext } from "./content/AuthContext";

function App() {
  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" />
    }

    return children
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" exact element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/Register" exact element={<Register />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
