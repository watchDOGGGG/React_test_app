import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from './screens/auth';
import Dashboard from "./screens/dashboard";
import Home from "./screens/home";
import MainCategory from "./screens/main_categories";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Auth/>}/>
      <Route path="auth/*" element={<Auth/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="category/:userid" element={<MainCategory/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
