import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Random from './pages/Random';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

export default function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/random/:id" element={<Random />} />
				<Route path="/search" element={<Search />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}
