import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			hash: window.location.hash
		};
	}
	componentDidMount() {
		window.addEventListener("hashchange", () =>
			this.setState({
				hash: window.location.hash
			})
		);
	}

	render() {
		let myRoute = <Home />;
		if (this.state.hash === "#/about") {
			myRoute = <About />;
		}

		console.log(this.state);
		return (
			<div className="App">
				<a href="#/">home</a>
				<a href="#/about">about</a>
				{myRoute}
			</div>
		);
	}
}

export default App;
