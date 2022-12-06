import { useReducer, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import WrapperContainer from '../components/UI/WrapperContainer/WrapperContainer';
import { GlobalContext } from '../context/context';
import { archiveReducer } from '../helpers/helpers';
import { useSessionStorage } from '../hooks/useSessionStorage';

const RootLayout = () => {
	const [state, setState] = useSessionStorage('archive', { rows: [] });
	const [archive, setArchive] = useReducer(archiveReducer, state);
	useEffect(() => {
		setState(archive);
	}, [archive, setState]);
	return (
		<GlobalContext.Provider value={{ archive, setArchive }}>
			<Header />
			<main>
				<WrapperContainer>
					<Outlet />
				</WrapperContainer>
			</main>
		</GlobalContext.Provider>
	);
};
export default RootLayout;
