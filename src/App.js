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
			"photo":"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
			"email":"purvi@gmail",
			"phone":"2894890231",
			"address":"Khoo gayi iska kuch pata nai"
		},
		{
			"id":2,
			"name":"firoz",
			"gender":"male",
			"photo":"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
			"email":"firoz@gmail",
			"phone":"2894890231",
			"address":"Matt pucho"
		},
		{
			"id":3,
			"name":"rimzhim",
			"gender":"female",
			"photo":"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
			"email":"rimzhim@gmail",
			"phone":"2894890231",
			"address":"Pata nai"
		},
		{
			"id":4,
			"name":"sher",
			"gender":"male",
			"photo":"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
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
  