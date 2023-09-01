import { useState } from 'react';
import { useMemo } from 'react';
import '../../assets/css/pages/home/home.scss';

import Drawer from './Drawer';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Menu from './Menu';
import Overlay from '../../components/templates/Overlay';
import BackToTop from '../../components/atoms/BackToTop';

function Home() {
	const [ isOpenedDrawer, setIsOpenedDrawer ] = useState(false);
	const modifier = isOpenedDrawer ? 'home--noscroll' : '';
	const contents = useMemo( () => <><Main /><BackToTop /><Footer /></>, [] );
	
	return (
		<div className={modifier}>
			<Menu isOpenedDrawer={isOpenedDrawer} setIsOpenedDrawer={setIsOpenedDrawer} />
			<Header isOpenedDrawer={isOpenedDrawer} setIsOpenedDrawer={setIsOpenedDrawer} />
			<Drawer isOpenedDrawer={isOpenedDrawer} setIsOpenedDrawer={setIsOpenedDrawer} />
			<Overlay isOpenedDrawer={isOpenedDrawer} setIsOpenedDrawer={setIsOpenedDrawer} />
			{ contents }
		</div>
  );
}

export default Home;
