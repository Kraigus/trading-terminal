import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Navigate,
} from 'react-router-dom';
import RootLayout from '../pages/RootLayout';
import ArchivePage from '../pages/ArchivePage/ArchivePage';
import TradingPage from '../pages/TradingPage/TradingPage';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<TradingPage />} />
			<Route path='archive' element={<ArchivePage />} />
			<Route path='*' element={<Navigate to='/' replace />} />
		</Route>
	)
);
