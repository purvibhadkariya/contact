import './App.css';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
	  localStorage.setItem("data",JSON.stringify([
		{
			"id":1,
			"name":"purvi",
			"gender":"female",
			"photo":"",
			"email":"purvi@gmail",
			"phone":"2894890231",
			"address":"Khoo gayi iska kuch pata nai"
		},
		{
			"id":2,
			"name":"firoz",
			"gender":"male",
			"photo":"",
			"email":"firoz@gmail",
			"phone":"2894890231",
			"address":"Matt pucho"
		},
		{
			"id":3,
			"name":"rimzhim",
			"gender":"female",
			"photo":"",
			"email":"rimzhim@gmail",
			"phone":"2894890231",
			"address":"Pata nai"
		},
		{
			"id":4,
			"name":"sher",
			"gender":"male",
			"photo":"",
			"email":"lion@gmail",
			"phone":"2894890231",
			"address":"Dubai"
		}
	]))
	
	
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/login" element={<Login/>} />
					<Route path="/signup" element={<SignUp/>} />
				</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
  