import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Auth from './screens/auth';
import Home from "./screens/home";
import Dashboard from "./screens/dashboard";
import MainProduct from "./screens/mainproduct";
import MainCategory from "./screens/main_categories";
import ProductOverview from "./screens/product_overview";
import AdminLogin from "./screens/AdminLogin";
import Login from "./screens/Login";
import UploadScreen from "./screens/uploadScreen";
import Profile from "./screens/Profile";
import CreateProduct from "./screens/createProduct";
import CreateAccount from "./screens/createAccount";
import ConnectFarmer from './screens/connection';
import FarmerContact from "./screens/farmerContact";

function App() {
  return (
		<BrowserRouter>
			<Routes>
				{/* <Route
					path=''
					element={<Auth />}
				/> */}
				{/* <Route
					path='auth/*'
					element={<Auth />}
				/> */}
				<Route
					path='adminlogin'
					element={<AdminLogin />}
				/>
				<Route
					path='/Login'
					element={<Login />}
				/>
				<Route
					path='/'
					element={<Dashboard />}
				/>
				<Route
					path='home'
					element={<Home />}
				/>
				<Route
					path='/category/:farmerId'
					element={<MainCategory />}
				/>
				<Route
					path='/main/product'
					element={<MainProduct />}
				/>
				<Route
					path='/product/:id'
					element={<ProductOverview />}
				/>
				<Route
					path='/uploadScreen'
					element={<UploadScreen />}
				/>
				<Route
					path='/profile'
					element={<Profile />}
				/>
				<Route
					path='/createProduct'
					element={<CreateProduct />}
				/>
				<Route
					path='/createAccount'
					element={<CreateAccount />}
				/>
				<Route
					path='/connectFarmer'
					element={<ConnectFarmer />}
				/>
				<Route
					path='/farmerContact/:id'
					element={<FarmerContact />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App
