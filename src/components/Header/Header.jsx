import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { routes } from '../../constants';

const Header = () => {
	let location = useLocation();
	return (
		<AppBar color='default' position='static'>
			<Tabs value={location.pathname}>
				{routes.map((el) => {
					return (
						<Tab
							key={el.label}
							component={Link}
							to={el.path}
							value={el.path}
							label={el.label}
						/>
					);
				})}
			</Tabs>
		</AppBar>
	);
};
export default Header;
