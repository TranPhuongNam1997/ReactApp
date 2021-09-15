import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Nav from './Component/Nav';
import HomePage from './Pages/HomePage';
import RouterURL from './RouterURL';

import {
	BrowserRouter as Router,
	Route,
} from "react-router-dom";


function App() {
	return (
		<Router>
			<div className="d-flex flex-column h-100">
				<main className="flex-shrink-0">
					<Nav />
					<RouterURL/>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
