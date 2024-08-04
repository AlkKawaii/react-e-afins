import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Random from './pages/Random';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/random" element={<Random />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
