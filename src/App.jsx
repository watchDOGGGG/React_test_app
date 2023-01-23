import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from './screens/auth';
import Dashboard from "./screens/dashboard";
import Home from "./screens/home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Auth/>}/>
      <Route path="auth/*" element={<Auth/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
