import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Random from './pages/Random';

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/random" element={<Random />} />
			</Routes>
		</BrowserRouter>
	);
}
